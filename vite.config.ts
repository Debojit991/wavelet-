// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // 1. Turn off the forced Cloudflare preset
  cloudflare: false,
  
  // 2. Force the Vercel preset at the compiler level
  // @ts-ignore - bypassing Lovable's strict type checking to force the Vercel engine
  server: {
    preset: "vercel",
  },
});
