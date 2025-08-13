import { defineCollection } from "astro:content";

import { file } from "astro/loaders";

const fr = defineCollection({ loader: file("src/translations/fr/fr.json") });
const en = defineCollection({ loader: file("src/translations/en/en.json") });
const de = defineCollection({ loader: file("src/translations/de/de.json") });
export const collections = { fr, en, de };
