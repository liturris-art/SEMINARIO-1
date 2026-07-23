import {
  Component, ElementRef, EventEmitter, Input, Output,
  ViewChild, OnDestroy, AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FaceRecognitionService } from '../../services/face-recognition.service';

export type EstadoScan =
  | 'buscando' | 'poca-luz' | 'muy-cerca' | 'muy-lejos'
  | 'descentrado' | 'listo' | 'capturando' | 'error';

// ─────────────────────────────────────────────────────────────────────────────
// FaceScanComponent — cámara en vivo con guía de encuadre, al estilo de las
// apps de verificación biométrica (Nequi y similares).
//
// Antes se usaba Camera.getPhoto(), que abre la app de cámara NATIVA del
// sistema — al ser una pantalla completamente ajena a la app, no hay forma
// de superponer ninguna guía ahí. Este componente usa getUserMedia() para
// mostrar la cámara DENTRO de la propia app, y corre FaceMesh en vivo sobre
// cada frame para saber si hay que acercarse, alejarse, centrarse o si falta
// luz — y captura sola cuando el encuadre es bueno y se sostiene un momento.
// ─────────────────────────────────────────────────────────────────────────────
@Component({
  selector: 'app-face-scan',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './face-scan.component.html',
  styleUrls: ['./face-scan.component.scss'],
})
export class FaceScanComponent implements AfterViewInit, OnDestroy {

  @Input() titulo = 'Escanea tu rostro';
  @Output() capturado = new EventEmitter<{ base64: string; landmarks: number[] }>();
  @Output() cancelado = new EventEmitter<void>();

  @ViewChild('video', { static: true }) videoRef!: ElementRef<HTMLVideoElement>;

  estado: EstadoScan   = 'buscando';
  mensaje              = 'Preparando la cámara...';
  progreso              = 0;      // 0–100, sostenimiento del encuadre correcto
  capturandoFoto        = false;
  camaraLista            = false; // false mientras getUserMedia/video.play() no resuelven — evita el flash de pantalla negra

  private stream:       MediaStream | null = null;
  private loopTimeout:  any = null;
  private framesBuenos  = 0;
  private readonly FRAMES_NECESARIOS = 6;   // ~1.7 s sosteniendo el encuadre
  private readonly INTERVALO_MS      = 280;
  private destruido = false;

  constructor(private faceService: FaceRecognitionService) {}

  async ngAfterViewInit() {
    await this.iniciarCamara();
  }

  ngOnDestroy() {
    this.destruido = true;
    this.detenerCamara();
  }

  private async iniciarCamara() {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 480 } },
        audio: false,
      });
      if (this.destruido) { this.stream.getTracks().forEach(t => t.stop()); return; }

      const video = this.videoRef.nativeElement;
      video.srcObject = this.stream;
      await video.play();

      this.camaraLista = true;
      this.mensaje = 'Ubica tu rostro dentro del óvalo';
      this.programarSiguienteFrame();
    } catch (e) {
      console.error('Error abriendo cámara:', e);
      this.estado  = 'error';
      this.mensaje = 'No se pudo acceder a la cámara. Revisa los permisos de la app.';
    }
  }

  private programarSiguienteFrame() {
    if (this.destruido) return;
    this.loopTimeout = setTimeout(() => this.procesarFrame(), this.INTERVALO_MS);
  }

  private async procesarFrame() {
    if (this.destruido || this.capturandoFoto) return;
    const video = this.videoRef.nativeElement;

    if (video.readyState < 2) { this.programarSiguienteFrame(); return; }

    try {
      const r = await this.faceService.analizarFrame(video);
      if (this.destruido) return;

      if (!r.detectado) {
        this.actualizarEstado('buscando', 'Ubica tu rostro dentro del óvalo');
      } else if (r.brillo < 60) {
        this.actualizarEstado('poca-luz', 'Poca luz — busca un lugar más iluminado');
      } else if (r.anchoRostro > 0.62) {
        this.actualizarEstado('muy-cerca', 'Aléjate un poco');
      } else if (r.anchoRostro < 0.22) {
        this.actualizarEstado('muy-lejos', 'Acércate un poco más');
      } else if (r.centroX < 0.32 || r.centroX > 0.68 || r.centroY < 0.22 || r.centroY > 0.78) {
        this.actualizarEstado('descentrado', 'Centra tu rostro en el óvalo');
      } else {
        this.estado   = 'listo';
        this.mensaje  = '¡Perfecto! Mantén la posición...';
        this.framesBuenos++;
        this.progreso = Math.min(100, Math.round((this.framesBuenos / this.FRAMES_NECESARIOS) * 100));
        if (this.framesBuenos >= this.FRAMES_NECESARIOS) { await this.capturar(); return; }
      }
    } catch (e) {
      console.warn('Error procesando frame de escaneo:', e);
    }
    this.programarSiguienteFrame();
  }

  private actualizarEstado(estado: EstadoScan, mensaje: string) {
    this.estado      = estado;
    this.mensaje      = mensaje;
    this.framesBuenos = 0;
    this.progreso     = 0;
  }

  async capturarManual() {
    if (this.estado !== 'listo' || this.capturandoFoto) return;
    await this.capturar();
  }

  private async capturar() {
    if (this.capturandoFoto) return;
    this.capturandoFoto = true;
    this.estado  = 'capturando';
    this.mensaje = 'Capturando...';
    if (this.loopTimeout) clearTimeout(this.loopTimeout);

    const video  = this.videoRef.nativeElement;
    const canvas = document.createElement('canvas');
    canvas.width  = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d')!.drawImage(video, 0, 0);
    const base64 = canvas.toDataURL('image/jpeg', 0.85);

    const landmarks = await this.faceService.extraerLandmarks(base64);
    this.detenerCamara();

    if (this.destruido) return;

    if (!landmarks) {
      // No debería pasar viniendo de "listo", pero por si acaso no se
      // pierde el intento: se avisa como cancelado en vez de fallar mudo.
      this.estado  = 'error';
      this.mensaje = 'No se pudo procesar la foto. Intenta de nuevo.';
      this.capturandoFoto = false;
      return;
    }
    this.capturado.emit({ base64, landmarks });
  }

  cancelar() {
    this.detenerCamara();
    this.cancelado.emit();
  }

  private detenerCamara() {
    if (this.loopTimeout) clearTimeout(this.loopTimeout);
    this.stream?.getTracks().forEach(t => t.stop());
    this.stream = null;
  }
}
