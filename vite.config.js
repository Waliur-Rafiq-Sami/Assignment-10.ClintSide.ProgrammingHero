import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// const flowbite = require("flowbite-react/tailwind");

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // flowbite.plugin(),
    // require("preline/plugin"),
  ],
});
