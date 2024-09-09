import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/admin/',
  optimizeDeps: {
    include: ["styled-components", "@mui/material"],
  },
  build: {
    outDir: 'dist', // Explicitly set the output directory
    rollupOptions: {
      output: {
        // Ensures correct paths are set for assets
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }

});
