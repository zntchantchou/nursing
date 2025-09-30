import { defineCollection } from "astro:content";

import { file } from "astro/loaders";

// these are the default translations

const fr = defineCollection({
  loader: file("src/translations/fr/translations.json"),
});
const en = defineCollection({
  loader: file("src/translations/en/translations.json"),
});
const de = defineCollection({
  loader: file("src/translations/de/translations.json"),
});

export const collections = { fr, en, de };
