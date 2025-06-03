import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// Tes traductions
import translationEN from "./locales/en/translation.json";
import translationFR from "./locales/fr/translation.json";

i18n.use(LanguageDetector) // pour détecter la langue du navigateur
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: translationEN },
            fr: { translation: translationFR },
        },
        fallbackLng: "fr",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
