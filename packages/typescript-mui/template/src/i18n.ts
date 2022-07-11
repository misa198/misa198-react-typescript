import i18n from 'i18next';
// import detector from 'i18next-browser-languagedetector'; // Auto detect language
import { initReactI18next } from 'react-i18next';
import en from 'locales/en/en.json';

const resources = {
  en: {
    translation: en,
  },
};

const initI18n = () =>
  i18n
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
    });

export default initI18n;
