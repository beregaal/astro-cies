// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";


// https://astro.build/config
//export default defineConfig({});
export default defineConfig({
  site: "https://demo.gaallabs.com",
  integrations: [
    sitemap({
      entryLimit: 5000, // URLs por archivo
      filter: () => true,
      serialize(item) {
        return {
          ...item,
          lastmod: new Date().toISOString(),
        };
      },
    }),
  ],
});
