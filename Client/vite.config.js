import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Ensures that Vite generates relative paths for all assets
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    outDir: 'dist', // Output directory for the build
    assetsDir: 'assets', // Directory for the assets within the build output
    rollupOptions: {
      output: {
        assetFileNames: '[name][extname]', // Prevents hashing of asset file names
      },
    },
  },
});
