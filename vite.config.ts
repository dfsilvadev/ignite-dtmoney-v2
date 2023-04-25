import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@mocks": path.resolve(__dirname, "./src/mocks"),
      "@screens": path.resolve(__dirname, "./src/screens"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@stories": path.resolve(__dirname, "./src/stories"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@templates": path.resolve(__dirname, "./src/templates"),
      "@tests": path.resolve(__dirname, "./src/tests"),
      "@utils": path.resolve(__dirname, "./src/utils")
    }
  },
  optimizeDeps: {
    exclude: ["@testing-library/jest-dom"]
  },
  server: {
    watch: {
      usePolling: true
    }
  }
});
