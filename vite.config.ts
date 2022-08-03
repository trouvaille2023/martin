import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: "martin",
  // define: {},
  build: {
    outDir: "deploy",
    assetsDir: "assets",
  },
  server: {
    open: "/",
    host: "localhost",
  },
});
