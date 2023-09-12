import { createI18n } from 'vue-i18n';
import En from './en.json';
import Ja from './ja.json';
import ZhHans from './zh-Hans.json';

const messages = {
  en: En,
  ja: Ja,
  'zh-Hans': ZhHans,
};

const i18n = createI18n({
  locale: uni.getLocale(),
  legacy: false,
  globalInjection: true,
  messages: messages,
});

export { messages };
export default i18n;
