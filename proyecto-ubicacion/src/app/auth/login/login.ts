import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth/AuthService';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;  
  errorMsg = '';
  loading = false;
  shakeError = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {

    // Si ya está autenticado, redirigir
    this.auth.isAuthenticated()
      .pipe(take(1))
      .subscribe(isAuth => {
        if (isAuth) {
          this.router.navigateByUrl('/rutas');
        }
      });

    // Crear formulario
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  gotoRegister(): void {
    this.router.navigate(['/register']);
  }

  submit(): void {
    if (this.form.invalid) return;

    this.loading = true;
    this.errorMsg = '';

    const { email, password } = this.form.getRawValue();

    this.auth.signIn(email, password)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.loading = false;
          this.router.navigateByUrl('/rutas');
        },
        error: (err) => {
          this.loading = false;

          if (err.message.includes('Invalid login credentials')) {
            this.errorMsg = 'Correo o contraseña incorrectos';
          } else {
            this.errorMsg = err.message || 'Error al iniciar sesión';
          }

          this.shakeError = true;
          setTimeout(() => this.shakeError = false, 500);
        }
      });
  }
}
