import type { Config } from "@react-router/dev/config";
import { vercelPreset } from "@vercel/react-router/vite";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  // Pre-render static routes to HTML at build time for faster responses.
  // The `/contact` route keeps its runtime `action` server for form POSTs.
  prerender: ["/", "/about", "/contact"],
  presets: [vercelPreset()],
} satisfies Config;
