import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['mqtt']
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: './src/test/setup.ts',
  },
});
