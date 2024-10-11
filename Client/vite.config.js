import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Ensures absolute paths for assets in production
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Allows importing files from src using '@/...' syntax
    },
  },
  build: {
    outDir: 'dist', // Output directory for the build files
    assetsDir: 'assets', // Directory for the assets within the build output
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]', // Uses hashed filenames to handle caching properly
        
      },
    },
  },
});
