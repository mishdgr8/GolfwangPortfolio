import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    build: {
      // Target modern browsers for smaller output
      target: 'es2020',
      // Enable CSS code splitting
      cssCodeSplit: true,
      // Reduce chunk size warnings threshold
      chunkSizeWarningLimit: 500,
      rollupOptions: {
        output: {
          // Manual chunk splitting for better caching
          manualChunks: {
            // Vendor: React core (cached separately from app code)
            'vendor-react': ['react', 'react-dom'],
            // Router chunk
            'vendor-router': ['react-router-dom'],
            // GSAP animation library (large, cached separately)
            'vendor-gsap': ['gsap', '@gsap/react', 'gsap/ScrollTrigger', 'gsap/ScrollSmoother'],
            // Icons (tree-shaken but still a chunk)
            'vendor-icons': ['lucide-react'],
          },
          // Shorter hashed filenames for smaller HTML
          chunkFileNames: 'js/[name]-[hash:8].js',
          entryFileNames: 'js/[name]-[hash:8].js',
          assetFileNames: 'assets/[name]-[hash:8].[ext]',
        }
      },
      minify: 'esbuild',
    },
  };
});
