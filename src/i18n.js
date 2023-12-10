import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./Locale/en/translation.json"
import translationDE from "./Locale/de/translation.json"

const resources = {
    en: {
      translation: translationEN,
    },
    de: {
      translation: translationDE,
    },
  };
  
  //i18N Initialization
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: localStorage.getItem("lang") || "en", //default language
      keySeparator: false,
      interpolation: {
        escapeValue: false,
      },
    });
  
  export default i18n;