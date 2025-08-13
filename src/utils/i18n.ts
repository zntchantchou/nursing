import { getEntry } from "astro:content";

export const getTranslation = async (locale: string, key: string) => {
  try {
    let result;
    console.log("[getTranslation] LOCALE ", locale);
    if (locale === "en") result = await getEntry("en", key);
    if (locale === "fr") result = await getEntry("fr", key);
    else result = await getEntry("de", key);

    return result;
  } catch (e) {
    console.log("[getTranslation] Error: ", e);
  }
};
