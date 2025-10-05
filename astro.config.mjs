// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { filterSitemapByDefaultLocale, i18n } from "astro-i18n-aut/integration";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

const defaultLocale = "de";
const locales = {
  de: "de",
  en: "en", // the `defaultLocale` value must present in `locales` keys
  fr: "fr",
};
// const locales = ["de", "en", "fr"];

// https://astro.build/config
export default defineConfig({
  site: "https://zntchantchou.github.io",
  base: "/nursing",
  build: {
    format: "directory",
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true,
      open: true, // This allows external access
      // allowedHosts: ["my-hostname", "192.168.1.100", "localhost"], // Add specific hosts or true for all
    },
  },
  integrations: [
    i18n({
      locales,
      defaultLocale,
    }),
    sitemap({
      i18n: {
        locales,
        defaultLocale,
      },
      filter: filterSitemapByDefaultLocale({ defaultLocale }),
    }),
  ],
});
