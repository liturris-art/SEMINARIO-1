import { Injectable } from '@angular/core';
import { NativeBiometric } from 'capacitor-native-biometric';

@Injectable({
  providedIn: 'root'
})
export class BiometricService {

  server = "recoleccion_app";

  constructor() { }

  // verificar si el dispositivo soporta biometría
  async isAvailable(): Promise<boolean> {

    try {

      const result = await NativeBiometric.isAvailable();

      return result.isAvailable;

    } catch (error) {

      return false;

    }

  }

  // guardar credenciales
  async saveCredentials(username: string, password: string) {

    try {

      await NativeBiometric.setCredentials({
        username,
        password,
        server: this.server
      });

    } catch (error) {

      console.log("Error guardando biometría", error);

    }

  }

  // obtener credenciales guardadas
  async getCredentials() {

    try {

      const credentials = await NativeBiometric.getCredentials({
        server: this.server
      });

      return credentials;

    } catch (error) {

      return null;

    }

  }

  // autenticación biométrica
  async verifyIdentity(): Promise<boolean> {

    try {

      await NativeBiometric.verifyIdentity({
        reason: "Autenticación biométrica",
        title: "Iniciar sesión",
        subtitle: "Usa tu rostro o huella",
        description: "Confirma tu identidad"
      });

      return true;

    } catch (error) {

      return false;

    }

  }

  // eliminar credenciales
  async deleteCredentials() {

    try {

      await NativeBiometric.deleteCredentials({
        server: this.server
      });

    } catch (error) {

      console.log(error);

    }

  }

}