import { getEntry } from "astro:content";
import germanyLogo from "../assets/germany.png";
import ukLogo from "../assets/uk.png";
import franceLogo from "../assets/france.png";

export const getTranslation = async (
  locale: AppLocaleEnum,
  key: string,
  sectionName?: string
) => {
  try {
    if (!sectionName) return getEntry(locale, key);
    const sectionTranslations = await getEntry(locale, sectionName);
    if (sectionTranslations) {
      const data = sectionTranslations?.body;
      console.log("data ", data);
      const errorMsg =
        "translation not found for key: " +
        key +
        " with locale: " +
        locale +
        " and section: " +
        sectionName;
      if (!data) throw errorMsg;
      const t = JSON.parse(data)[key];
      if (!t) throw errorMsg;
      return t;
    }
  } catch (e) {
    console.log("[getTranslation] Error: ", e);
  }
};
export enum AppLocaleEnum {
  "EN" = "en",
  "FR" = "fr",
  "DE" = "de",
}

export const getCurrentLocaleUrl = (url: URL, locale: string): string => {
  const rgx = /\/(de|fr|en)\//g;
  if (url.toString().match(rgx)) {
    const result = url.toString().replace(rgx, "/" + locale + "/");
    return result;
  }
  const urlStart = url.toString().slice(0, 7 + url.host.length) + "/" + locale;
  return urlStart + url.pathname;
};

type Language = {
  logo: ImageMetadata;
  code: AppLocaleEnum;
  label: string;
};

export const languages: Language[] = [
  { code: AppLocaleEnum.DE, label: "DE", logo: germanyLogo },
  { code: AppLocaleEnum.EN, label: "EN", logo: ukLogo },
  { code: AppLocaleEnum.FR, label: "FR", logo: franceLogo },
];

export const getLanguageByLocale = (locale: AppLocaleEnum) => {
  return languages.find((l) => l.code === locale);
};
