import { getEntry } from "astro:content";
import germanyLogo from "../assets/germany.png";
import ukLogo from "../assets/uk.png";
import franceLogo from "../assets/france.png";

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
  return urlStart + url.pathname;
};

export enum AppLocaleEnum {
  "EN" = "en",
  "FR" = "fr",
  "DE" = "de",
}

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
