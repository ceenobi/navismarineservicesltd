import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter()],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    host: "localhost",
    port: 3200,
    open: true,
    allowedHosts: [
      "localhost",
      "127.0.0.1",
      "::1",
    ],
  },
});
