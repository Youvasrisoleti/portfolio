import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // ✅ ensures relative asset paths
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // ❌ Removed rollupOptions.external
});
