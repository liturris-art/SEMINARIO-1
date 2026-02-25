import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, from, map, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { supabase } from '../../supabaseClient';
import { AuthChangeEvent, Session } from '@supabase/supabase-js';

export interface AuthUser {
  id: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService implements OnDestroy {

  // 🔥 Puede emitir undefined mientras carga sesión
  private userSubject = new BehaviorSubject<AuthUser | null | undefined>(undefined);
  private authListener: any;

  constructor() {
    this.loadInitialSession();
    this.listenAuthChanges();
  }

  // ===== Cargar sesión inicial =====
  private async loadInitialSession(): Promise<void> {
    const { data } = await supabase.auth.getSession();
    this.updateUser(data.session);
  }

  // ===== Escuchar cambios de autenticación =====
  private listenAuthChanges(): void {
    const { data } = supabase.auth.onAuthStateChange(
      (_event: AuthChangeEvent, session: Session | null) => {
        this.updateUser(session);
      }
    );

    this.authListener = data.subscription;
  }

  private updateUser(session: Session | null): void {
    const user = session?.user
      ? { id: session.user.id, email: session.user.email ?? '' }
      : null;

    this.userSubject.next(user);
  }

  // ===== Observables públicos =====

  // 🔥 CORREGIDO (incluye undefined)
  getUser(): Observable<AuthUser | null | undefined> {
    return this.userSubject.asObservable();
  }

  // 🔥 Mejor validación
  isAuthenticated(): Observable<boolean> {
    return this.userSubject.pipe(
      map(user => user !== null && user !== undefined)
    );
  }

  // ===== Registro =====
  signUp(email: string, password: string): Observable<void> {
    return from(
      supabase.auth.signUp({ email, password })
    ).pipe(
      map(({ error }) => {
        if (error) throw error;
      }),
      catchError(err => throwError(() => new Error(err.message)))
    );
  }

  // ===== Login =====
  signIn(email: string, password: string): Observable<void> {
    return from(
      supabase.auth.signInWithPassword({ email, password })
    ).pipe(
      map(({ error }) => {
        if (error) throw error;
      }),
      catchError(err => throwError(() => new Error(err.message)))
    );
  }

  // ===== Logout =====
  signOut(): Observable<void> {
    return from(
      supabase.auth.signOut()
    ).pipe(
      map(({ error }) => {
        if (error) throw error;
      }),
      catchError(err => throwError(() => new Error(err.message)))
    );
  }

  // ===== Limpieza =====
  ngOnDestroy(): void {
    this.authListener?.unsubscribe();
  }
}