import { getEntry } from "astro:content";

export const getTranslation = async (locale: string, key: string) => {
  try {
    console.log("[getTranslation] LOCALE ", locale);
    if (locale === AppLocaleEnum.EN) return getEntry(AppLocaleEnum.EN, key);
    if (locale === AppLocaleEnum.FR) return getEntry(AppLocaleEnum.FR, key);
    else return getEntry(AppLocaleEnum.DE, key);
  } catch (e) {
    console.log("[getTranslation] Error: ", e);
  }
};

export enum AppLocaleEnum {
  "EN" = "en",
  "FR" = "fr",
  "DE" = "de",
}
