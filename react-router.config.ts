import type { Config } from "@react-router/dev/config";
import { vercelPreset } from "@vercel/react-router/vite";
import { type ServiceScope, serviceScope } from "./app/lib/constants";


export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  // Pre-render static routes to HTML at build time for faster responses.
  // The `/contact` route keeps its runtime `action` server for form POSTs.
  //
  async prerender() {
    const services = serviceScope.map(
      (service: ServiceScope) => `/services/${service.slug}`,
    );
    return ["/",
    "/about",
    "/services",
    "/contact", ...services];
  },
  presets: [vercelPreset()],
} satisfies Config;
