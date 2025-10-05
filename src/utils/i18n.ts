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
    if (!sectionName) {
      return getEntry(locale, key);
    }
    const sections = await getEntry(locale, "sections");
    if (sections) {
      const sectionData = sections?.data;
      const errorMsg =
        "translation not found for key: " +
        key +
        " with locale: " +
        locale +
        " and section: " +
        sectionName;
      if (!sectionData) throw errorMsg;
      const sectionTranslations = sectionData[sectionName];
      if (!sectionTranslations) throw errorMsg;
      const translation = sectionTranslations[key];
      if (!translation) throw errorMsg;
      return translation;
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
  console.log("URL ", url.toString());
  const urlStart = url.toString().slice(0, 8 + url.host.length) + "/" + locale;
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
