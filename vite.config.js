import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { qrcode } from "vite-plugin-qrcode";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), qrcode(), tailwindcss()],
  // base:"/cargoconnect"
  // build: {
  //   rollupOptions: {
  //     external: ["react-router-dom"], // Or your specific package
  //   },
  // },
});
