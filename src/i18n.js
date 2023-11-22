import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from './locales/en/translation.json'
import translationAM from './locales/am/translation.json'
import translationRU from './locales/ru/translation.json'

i18n.use(initReactI18next).init({
    // lng: localStorage.getItem("i18nextLng") || "en",
    lng: "en",

//    fallbackLng: localStorage.getItem("i18nextLng") || "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: {
            translation: translationEN
        },
        am: {
            translation: translationAM
        },
        ru: {
            translation: translationRU
        },
    },
    react: {
        useSuspense: true
    }
});

export default i18n;