import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/https://github.com/JaysonNunez1/React-portfolio',
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
