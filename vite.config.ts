import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimizaciones para SEO y performance
    rollupOptions: {
      output: {
        // Generar nombres de archivo más legibles para SEO
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`
          }
          if (/css/i.test(ext)) {
            return `assets/css/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        }
      }
    },
    // Optimizaciones de compresión
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // Generar source maps para debugging (solo en desarrollo)
    sourcemap: false,
    // Optimizar el tamaño del bundle
    chunkSizeWarningLimit: 1000
  },
  // Optimizaciones de desarrollo
  server: {
    port: 3000,
    open: true
  },
  // Optimizaciones de preview
  preview: {
    port: 4173,
    open: true
  },
  // Configuración de assets
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.webp'],
  // Optimizaciones de CSS
  css: {
    devSourcemap: false
  }
});
