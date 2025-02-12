import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://portfolio-6q18.onrender.com",
      },
    },
  },
});
