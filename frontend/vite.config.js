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
<<<<<<< HEAD

=======
>>>>>>> d6953083819fe6e426f84f2c22ced656f1cf68a0
