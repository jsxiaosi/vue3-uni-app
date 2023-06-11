import { createI18n } from 'vue-i18n';
import type { Recordable } from '#/global';

const config: Recordable = import.meta.glob('./**/index.ts', { eager: true });

const messages: Recordable = {};
Object.keys(config).forEach((key) => {
  const name: RegExpMatchArray =
    key.match(/^\.\/([\s\S]+)\/index.ts$/) || ([] as unknown as RegExpMatchArray);
  if (!name[1]) return;
  messages[name[1]] = config[key].default;
});

const i18n = createI18n({
  locale: uni.getLocale(),
  legacy: false,
  globalInjection: true,
  messages: messages,
});

export { messages };
export default i18n;
