import { defineConfig } from 'vite';
import { createVuePlugin as vue } from "vite-plugin-vue2";

// https://vitejs.dev/config/
const path = require("path");

console.log("@import @/assets/scss/abstracts/_variables.scss");
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: [
          '@import "@/assets/scss/abstracts/_variables.scss"',
        ],
      },
    },
  }
});
