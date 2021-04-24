import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import resources from "./locales/ru.json";

const LANGUAGE = "ru";

i18n.use(initReactI18next).init({
  interpolation: {
    escapeValue: false,
  },
  lng: LANGUAGE,
  resources,
});
