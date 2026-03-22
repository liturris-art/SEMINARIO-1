import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}

  // Log seguro - solo en desarrollo, sin datos sensibles
  log(message: string, category: string = 'INFO') {
    if (!environment.production) {
      console.log(`[${category}] ${message}`);
    }
  }

  // Log de errores (siempre se muestra)
  error(message: string, error?: any) {
    console.error(`[ERROR] ${message}`, error);
  }

  // Log de eventos de seguridad (sin datos sensibles)
  securityLog(event: string, details?: any) {
    const safeDetails = details ? this.sanitizeLogData(details) : {};
    console.log(`[SECURITY] ${event}`, safeDetails);
  }

  // Remover datos sensibles de los logs
  private sanitizeLogData(data: any): any {
    if (!data) return data;

    const sensitiveFields = [
      'password',
      'email',
      'token',
      'user_metadata',
      'session',
    ];
    const sanitized = { ...data };

    sensitiveFields.forEach((field) => {
      if (sanitized[field]) {
        sanitized[field] = '[REDACTED]';
      }
    });

    return sanitized;
  }
}
