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
    outDir: 'dist', // Output directory for the build files
    assetsDir: 'assets', // Directory for the assets within the build output
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]', // Uses hashed filenames to handle caching properly
        
      },
    },
  },

});
