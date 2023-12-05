import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.barangay.elibrary.app',
  appName: 'Barangay E-Library',
  webDir: 'public',
  server: {
    androidScheme: 'https'
  }
};

export default config;
