import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cleanroute.app', // 🔥 cambia esto (importante para deep links reales)
  appName: 'CleanRoute',
  webDir: 'www',

  server: {
    androidScheme: 'https'
  },

  plugins: {
    App: {
      // 🔥 permite manejar URLs tipo:
      // recoleccionapp://reset-password
      urlScheme: 'recoleccionapp'
    }
  }
};

export default config;