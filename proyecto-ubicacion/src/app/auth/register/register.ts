import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth/AuthService';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;
  errorMsg = '';
  infoMsg = '';
  loading = false;

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

    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  submit(): void {
    if (this.form.invalid) return;

    this.loading = true;
    this.errorMsg = '';
    this.infoMsg = '';

    const { email, password } = this.form.getRawValue();

    this.auth.signUp(email, password)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.loading = false;
          this.infoMsg = 'Registro exitoso.';
          this.router.navigateByUrl('/login');
        },
        error: (err) => {
          this.loading = false;
          this.errorMsg = err.message || 'Error al registrarte';
        }
      });
  }
}