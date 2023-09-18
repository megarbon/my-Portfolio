import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import type from "@astrojs/typescrip";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
});
