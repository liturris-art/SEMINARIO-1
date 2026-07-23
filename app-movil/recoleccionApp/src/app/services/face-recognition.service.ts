import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

// ─────────────────────────────────────────────────────────────────────────────
// FaceRecognitionService — MediaPipe Face Mesh
//
// Carga MediaPipe desde CDN (sin instalación npm, sin problemas de esbuild).
// Extrae 468 landmarks del rostro y los usa como descriptor único de la persona.
// Umbral de similitud: cosine distance < 0.15 = misma persona.
// ─────────────────────────────────────────────────────────────────────────────

const DESCRIPTOR_KEY = 'faceDescriptorMP';
const CDN_BASE       = 'https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh';
const SIMILARITY_THRESHOLD = 0.15;  // < 0.15 = misma persona

declare const FaceMesh: any;

@Injectable({ providedIn: 'root' })
export class FaceRecognitionService {

  private faceMesh: any   = null;
  private modelReady      = false;
  private scriptLoaded    = false;

  // Serializa extraerLandmarks(): faceMesh.onResults() es un único
  // callback compartido en la instancia de MediaPipe, así que dos
  // llamadas concurrentes pueden pisarse el resultado entre sí. Encolar
  // aquí garantiza que cada extracción termine antes de que empiece la
  // siguiente.
  private cola: Promise<unknown> = Promise.resolve();

  // ── Cargar MediaPipe desde CDN ────────────────────────────
  // Se inyecta como script en el DOM — esbuild nunca lo ve
  private async cargarScript(): Promise<void> {
    if (this.scriptLoaded) return;

    return new Promise((resolve, reject) => {
      // Script principal de MediaPipe Face Mesh
      const script = document.createElement('script');
      script.src   = `${CDN_BASE}/face_mesh.js`;
      script.crossOrigin = 'anonymous';
      script.onload  = () => { this.scriptLoaded = true; resolve(); };
      script.onerror = () => reject(new Error('No se pudo cargar MediaPipe desde CDN'));
      document.head.appendChild(script);
    });
  }

  // ── Inicializar FaceMesh ──────────────────────────────────
  async inicializar(): Promise<void> {
    if (this.modelReady) return;

    await this.cargarScript();

    return new Promise((resolve, reject) => {
      this.faceMesh = new FaceMesh({
        locateFile: (file: string) => `${CDN_BASE}/${file}`,
      });

      this.faceMesh.setOptions({
        maxNumFaces:        1,
        refineLandmarks:    true,
        minDetectionConfidence: 0.6,
        minTrackingConfidence:  0.6,
      });

      // Callback vacío requerido por la API
      this.faceMesh.onResults((_: any) => {});

      this.faceMesh.initialize()
        .then(() => { this.modelReady = true; resolve(); })
        .catch(reject);
    });
  }

  // ── Extraer landmarks de una imagen base64 ────────────────
  // Retorna array de 468 puntos {x, y, z} o null si no detecta rostro
  async extraerLandmarks(base64: string): Promise<number[] | null> {
    await this.inicializar();

    // Serializado: ver comentario de `cola`.
    const tarea = () => this._extraerLandmarksInterno(base64);
    const resultado = this.cola.then(tarea, tarea);
    this.cola = resultado.then(() => undefined, () => undefined);
    return resultado;
  }

  private _extraerLandmarksInterno(base64: string): Promise<number[] | null> {
    return new Promise((resolve) => {
      const img = new Image();

      img.onload = async () => {
        // Canvas temporal para procesar la imagen
        const canvas  = document.createElement('canvas');
        canvas.width  = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d')!;
        ctx.drawImage(img, 0, 0);

        let resultado: number[] | null = null;

        // Configurar callback para recibir resultados
        this.faceMesh.onResults((results: any) => {
          if (results.multiFaceLandmarks?.length > 0) {
            // Aplanar los 468 landmarks en un array de números
            const landmarks = results.multiFaceLandmarks[0];
            resultado = landmarks.flatMap((p: any) => [p.x, p.y, p.z]);
          }
        });

        try {
          await this.faceMesh.send({ image: canvas });
          resolve(resultado);
        } catch (e) {
          console.error('Error procesando imagen con MediaPipe:', e);
          resolve(null);
        }
      };

      img.onerror = () => resolve(null);
      img.src = base64.startsWith('data:') ? base64 : `data:image/jpeg;base64,${base64}`;
    });
  }

  // ── Análisis de un frame en vivo (para la guía de captura) ──
  // A diferencia de extraerLandmarks() (que recibe una foto ya tomada),
  // esto procesa un frame del <video> en vivo y además calcula qué tan
  // grande y centrado está el rostro y qué tan iluminado está el frame —
  // lo necesario para dar retroalimentación tipo "acércate"/"centra tu
  // rostro" mientras la cámara está abierta, en vez de solo al final.
  private canvasBrillo: HTMLCanvasElement | null = null;

  async analizarFrame(source: HTMLCanvasElement | HTMLVideoElement): Promise<{
    detectado:     boolean;
    landmarksFlat: number[] | null;
    anchoRostro:   number;  // 0–1, fracción del ancho del frame
    centroX:       number;  // 0–1
    centroY:       number;  // 0–1
    brillo:        number;  // 0–255 aprox.
  }> {
    await this.inicializar();
    const tarea = () => this._analizarFrameInterno(source);
    const resultado = this.cola.then(tarea, tarea);
    this.cola = resultado.then(() => undefined, () => undefined);
    return resultado;
  }

  private async _analizarFrameInterno(source: HTMLCanvasElement | HTMLVideoElement) {
    const ancho = (source as HTMLVideoElement).videoWidth  || (source as HTMLCanvasElement).width  || 640;
    const alto  = (source as HTMLVideoElement).videoHeight || (source as HTMLCanvasElement).height || 480;

    const canvas = document.createElement('canvas');
    canvas.width = ancho; canvas.height = alto;
    const ctx = canvas.getContext('2d')!;
    ctx.drawImage(source, 0, 0, ancho, alto);

    let landmarksFlat: number[] | null = null;
    let anchoRostro = 0, centroX = 0.5, centroY = 0.5;

    this.faceMesh.onResults((results: any) => {
      if (results.multiFaceLandmarks?.length > 0) {
        const landmarks = results.multiFaceLandmarks[0];
        landmarksFlat = landmarks.flatMap((p: any) => [p.x, p.y, p.z]);
        let minX = 1, maxX = 0, minY = 1, maxY = 0;
        for (const p of landmarks) {
          if (p.x < minX) minX = p.x; if (p.x > maxX) maxX = p.x;
          if (p.y < minY) minY = p.y; if (p.y > maxY) maxY = p.y;
        }
        anchoRostro = maxX - minX;
        centroX = (minX + maxX) / 2;
        centroY = (minY + maxY) / 2;
      }
    });

    try {
      await this.faceMesh.send({ image: canvas });
    } catch (e) {
      console.error('Error analizando frame:', e);
    }

    return {
      detectado: !!landmarksFlat,
      landmarksFlat,
      anchoRostro, centroX, centroY,
      brillo: this.calcularBrillo(source, ancho, alto),
    };
  }

  // Muestreo en un canvas pequeño (no el frame completo) — solo para
  // estimar iluminación general, no necesita resolución alta.
  private calcularBrillo(source: CanvasImageSource, anchoOrig: number, altoOrig: number): number {
    if (!this.canvasBrillo) this.canvasBrillo = document.createElement('canvas');
    const w = 40, h = Math.max(1, Math.round(40 * (altoOrig / anchoOrig)));
    this.canvasBrillo.width = w; this.canvasBrillo.height = h;
    const ctx = this.canvasBrillo.getContext('2d')!;
    ctx.drawImage(source, 0, 0, w, h);
    const { data } = ctx.getImageData(0, 0, w, h);
    let suma = 0;
    for (let i = 0; i < data.length; i += 4) {
      suma += 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    }
    return suma / (data.length / 4);
  }

  // ── Guardar descriptor de referencia ─────────────────────
  async guardarDescriptorReferencia(landmarks: number[]): Promise<void> {
    await Preferences.set({
      key:   DESCRIPTOR_KEY,
      value: JSON.stringify(landmarks),
    });
    console.log('✅ Descriptor MediaPipe guardado:', landmarks.length, 'valores');
  }

  // ── Cargar descriptor de referencia ──────────────────────
  async cargarDescriptorReferencia(): Promise<number[] | null> {
    const { value } = await Preferences.get({ key: DESCRIPTOR_KEY });
    return value ? JSON.parse(value) : null;
  }

  // ── Calcular similitud por distancia coseno ───────────────
  // 0 = idénticos, 1 = completamente diferentes
  // MediaPipe es más preciso con cosine distance que euclidiana
  private cosineSimilarity(a: number[], b: number[]): number {
    if (a.length !== b.length) return 1;

    let dot = 0, normA = 0, normB = 0;
    for (let i = 0; i < a.length; i++) {
      dot   += a[i] * b[i];
      normA += a[i] * a[i];
      normB += b[i] * b[i];
    }

    if (normA === 0 || normB === 0) return 1;
    const similitud = dot / (Math.sqrt(normA) * Math.sqrt(normB));
    return 1 - similitud; // 0 = iguales, 2 = opuestos (en práctica 0-0.5)
  }

  // ── Verificar identidad completa (desde una foto en base64) ──
  async verificarIdentidad(base64Actual: string): Promise<{
    verificado: boolean;
    confianza:  number;
    error:      string | null;
  }> {
    let actual: number[] | null;
    try {
      actual = await this.extraerLandmarks(base64Actual);
    } catch {
      return {
        verificado: false, confianza: 0,
        error: 'Error al procesar la imagen. Intenta de nuevo.',
      };
    }
    if (!actual) {
      return {
        verificado: false, confianza: 0,
        error: 'No se detectó ningún rostro. Mira de frente con buena iluminación.',
      };
    }
    return this.verificarIdentidadConLandmarks(actual);
  }

  // ── Verificar identidad a partir de landmarks ya extraídos ──
  // Usada por FaceScanComponent: el escaneo en vivo ya corrió MediaPipe
  // sobre el frame capturado, así que no hace falta volver a procesarlo.
  async verificarIdentidadConLandmarks(actual: number[]): Promise<{
    verificado: boolean;
    confianza:  number;
    error:      string | null;
  }> {
    const referencia = await this.cargarDescriptorReferencia();
    if (!referencia) {
      return {
        verificado: false, confianza: 0,
        error: 'No hay foto de referencia. Debes registrarte con foto primero.',
      };
    }

    const distancia = this.cosineSimilarity(referencia, actual);
    const confianza = Math.max(0, Math.round((1 - distancia / 0.5) * 100));
    const verificado = distancia < SIMILARITY_THRESHOLD;

    console.log(`MediaPipe — distancia: ${distancia.toFixed(4)}, confianza: ${confianza}%`);

    return { verificado, confianza, error: null };
  }

  // ── Utilidades ────────────────────────────────────────────
  async tieneDescriptorGuardado(): Promise<boolean> {
    const { value } = await Preferences.get({ key: DESCRIPTOR_KEY });
    return !!value;
  }

  async borrarDescriptor(): Promise<void> {
    await Preferences.remove({ key: DESCRIPTOR_KEY });
    this.modelReady  = false;
    this.faceMesh    = null;
  }
}
