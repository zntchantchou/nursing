// @ts-check
import { filterSitemapByDefaultLocale, i18n } from "astro-i18n-aut/integration";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

const defaultLocale = "en";
const locales = {
  en: "en-US", // the `defaultLocale` value must present in `locales` keys
  es: "es-ES",
  de: "de-DE",
};

// https://astro.build/config
export default defineConfig({
  build: {
    format: "directory",
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
