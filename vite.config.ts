import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import elm from "vite-plugin-elm";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), elm()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
