import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { LOCALS } from "./constants";
import * as EN from "./data/en/translation.json";
import * as FR from "./data/fr/translation.json";
import * as DE from "./data/de/translation.json";
import * as ES from "./data/es/translation.json";

const resources = {
  [LOCALS.EN]: {
    translations: EN.default,
  },

  [LOCALS.FR]: {
    translations: FR.default,
  },

  [LOCALS.DE]: {
    translations: DE.default,
  },

  [LOCALS.ES]: {
    translations: ES.default,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: LOCALS.EN,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
