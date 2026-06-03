import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule, ReactiveFormsModule,
  FormBuilder, FormGroup, Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
  IonContent, IonHeader, IonTitle, IonToolbar,
  IonButtons, IonButton,
  IonItem, IonInput, IonSelect, IonSelectOption,
  IonIcon, IonSpinner, IonNote,
  ToastController,
} from '@ionic/angular/standalone';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AuthService } from '../../services/auth.service';
import { FaceRecognitionService } from '../../services/face-recognition.service';

type Paso = 'datos' | 'foto' | 'listo';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls:  ['./register.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonButtons, IonButton,
    IonItem, IonInput, IonSelect, IonSelectOption,
    IonIcon, IonSpinner, IonNote,
    CommonModule, FormsModule, ReactiveFormsModule, RouterLink,
  ],
})
export class RegisterPage {

  registerForm: FormGroup;
  isLoading      = false;
  paso: Paso     = 'datos';

  // Foto de referencia
  fotoPreview:    string | null = null;
  procesando      = false;
  descriptorOk    = false;
  cargandoModelo  = false;

  constructor(
    private auth:        AuthService,
    private faceService: FaceRecognitionService,
    private router:      Router,
    private fb:          FormBuilder,
    private toastCtrl:   ToastController,
  ) {
    this.registerForm = this.fb.group({
      nombre:    ['', Validators.required],
      documento: ['', Validators.required],
      telefono:  ['', Validators.required],
      email:     ['', [Validators.required, Validators.email]],
      password:  ['', [Validators.required, Validators.minLength(8)]],
      rol:       ['', Validators.required],
    });
  }

  get esConductor(): boolean {
    return this.registerForm.get('rol')?.value === 'conductor';
  }

  // ── Paso 1: datos ────────────────────────────────────────
  avanzar() {
    if (this.registerForm.invalid) {
      this.showToast('Completa todos los campos correctamente', 'warning');
      return;
    }
    if (this.esConductor) {
      this.paso = 'foto';
      this.precargarModelo();
    } else {
      this.register();
    }
  }

  // Precarga MediaPipe mientras el conductor lee las instrucciones
  async precargarModelo() {
    this.cargandoModelo = true;
    try {
      await this.faceService.inicializar();
    } catch {
      this.showToast('No se pudo cargar el motor de reconocimiento. Verifica tu conexión.', 'warning');
    } finally {
      this.cargandoModelo = false;
    }
  }

  // ── Paso 2: foto ─────────────────────────────────────────
  async tomarFoto() {
    try {
      const foto = await Camera.getPhoto({
        quality:       90,
        resultType:    CameraResultType.Base64,
        source:        CameraSource.Camera,
        saveToGallery: false,
      });

      if (!foto.base64String) return;

      this.fotoPreview  = `data:image/jpeg;base64,${foto.base64String}`;
      this.procesando   = true;
      this.descriptorOk = false;

      this.showToast('⏳ Analizando rostro con MediaPipe...', 'warning');

      // Extraer landmarks con MediaPipe
      const landmarks = await this.faceService.extraerLandmarks(foto.base64String);

      this.procesando = false;

      if (!landmarks) {
        this.fotoPreview = null;
        this.showToast('❌ No se detectó rostro. Mira de frente con buena luz.', 'danger');
        return;
      }

      await this.faceService.guardarDescriptorReferencia(landmarks);
      this.descriptorOk = true;
      this.showToast(`✅ Rostro registrado — ${landmarks.length / 3} landmarks detectados`, 'success');

    } catch {
      this.procesando = false;
      this.showToast('Cámara cancelada', 'warning');
    }
  }

  // ── Paso 3: crear cuenta ─────────────────────────────────
  async register() {
    if (this.registerForm.invalid) return;
    if (this.esConductor && !this.descriptorOk) {
      return this.showToast('Primero registra tu foto de referencia', 'warning');
    }

    this.isLoading = true;
    try {
      const { nombre, documento, telefono, email, password, rol } = this.registerForm.value;
      await this.auth.register(email, password, { nombre, documento, telefono, rol });
      this.paso = 'listo';
      this.showToast('✅ Cuenta creada correctamente', 'success');
      setTimeout(() => this.router.navigate(['/login']), 2000);
    } catch (e: any) {
      this.showToast(
        e.message?.includes('already registered') ? 'Este correo ya está registrado' : e.message || 'Error en registro',
        'danger',
      );
    } finally {
      this.isLoading = false;
    }
  }

  volver() { this.paso = 'datos'; }

  private async showToast(message: string, color: 'success' | 'warning' | 'danger') {
    const t = await this.toastCtrl.create({ message, color, duration: 3500, position: 'top' });
    await t.present();
  }
}
