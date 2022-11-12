import { createI18n } from 'vue-i18n';
import type { Recordable } from '#/global';

const config: Recordable = import.meta.globEager('./**/index.ts');

const messages: Recordable = {};
Object.keys(config).forEach((key) => {
  const name: RegExpMatchArray = key.match(/^\.\/([\s\S]+)\/index.ts$/) || [];
  if (!name[1]) return;
  messages[name[1]] = config[key].default;
});

const i18n = createI18n({
  locale: uni.getLocale(),
  fallbackLocale: uni.getLocale(),
  legacy: false,
  globalInjection: true,
  messages,
});

export default i18n;
