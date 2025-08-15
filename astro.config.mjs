// @ts-check
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
