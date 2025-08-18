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

export const getCurrentLocaleUrl = (url: URL, locale: string): string => {
  const rgx = /\/(de|fr|en)\//g;
  if (url.toString().match(rgx)) {
    const result = url.toString().replace(rgx, "/" + locale + "/");
    return result;
  }
  const urlStart = url.toString().slice(0, 7 + url.host.length) + "/" + locale;
  const updatedUrl = urlStart + url.pathname;
  return updatedUrl;
};

export enum AppLocaleEnum {
  "EN" = "en",
  "FR" = "fr",
  "DE" = "de",
}
