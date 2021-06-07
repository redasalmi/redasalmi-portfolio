import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { EN_TRANS } from './enTrans';
import { FR_TRANS } from './frTrans';

const resources = {
  en: {
    translation: EN_TRANS,
  },
  fr: {
    translation: FR_TRANS,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('lng') ?? 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
