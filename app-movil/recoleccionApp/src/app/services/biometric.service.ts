import { Injectable } from '@angular/core';
import { NativeBiometric } from 'capacitor-native-biometric';

@Injectable({
  providedIn: 'root'
})
export class BiometricService {

  private server = "recoleccion_app";

  constructor() {}

  // 🔍 verificar si hay biometría disponible
  async isAvailable(): Promise<boolean> {

    try {

      const result = await NativeBiometric.isAvailable();

      console.log("Biometría disponible:", result);

      return result.isAvailable;

    } catch (error) {

      console.log("Biometría no disponible:", error);
      return false;

    }

  }

  // 💾 guardar credenciales
  async saveCredentials(username: string, password: string): Promise<void> {

    try {

      await NativeBiometric.setCredentials({
        username,
        password,
        server: this.server
      });

      console.log("Credenciales guardadas");

    } catch (error) {

      console.log("Error guardando credenciales:", error);

    }

  }

  // 📥 obtener credenciales
  async getCredentials(): Promise<{ username: string; password: string } | null> {

    try {

      const credentials = await NativeBiometric.getCredentials({
        server: this.server
      });

      console.log("Credenciales obtenidas");

      return {
        username: credentials.username,
        password: credentials.password
      };

    } catch (error) {

      console.log("No hay credenciales guardadas");
      return null;

    }

  }

  // 👁 autenticación biométrica
  async verifyIdentity(): Promise<boolean> {

    try {

      await NativeBiometric.verifyIdentity({
        reason: "Autenticación biométrica",
        title: "Iniciar sesión",
        subtitle: "Usa tu rostro o huella",
        description: "Confirma tu identidad"
      });

      console.log("Biometría verificada");

      return true;

    } catch (error) {

      console.log("Biometría cancelada o fallida");
      return false;

    }

  }

  // 🗑 eliminar credenciales
  async deleteCredentials(): Promise<void> {

    try {

      await NativeBiometric.deleteCredentials({
        server: this.server
      });

      console.log("Credenciales eliminadas");

    } catch (error) {

      console.log("Error eliminando credenciales:", error);

    }

  }

}