import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cleanroute.app',
  appName: 'CleanRoute',
  webDir: 'www',
  server: {
    // ⚠️ Debe ser 'http' para que los deep links funcionen en Android
    androidScheme: 'http',
  },
};

export default config;
