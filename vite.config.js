import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://put-print-ky689.ondigitalocean.app',
        changeOrigin: true,  // Orijinalın doğru yönləndirilməsini təmin edir
        secure: false,  // SSL yoxlamasını deaktiv edir
      },
    },
  },
});

