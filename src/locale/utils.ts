import type { Recordable } from '#/global';

export interface Messages {
  [key: string]: string;
}

export const defaultFilePath = (config: Recordable) => {
  let messages: Messages = {};
  Object.keys(config).forEach((key) => {
    const name: RegExpMatchArray = key.match(/^\.\/([\s\S]+)\/([\s\S]+)\.ts$/) || [];
    const valueName = name[2];
    const value = config[key].default || {};
    messages = { ...messages, ...flat(value, valueName) };
  });

  return messages;
};

// 要把多级对象转换成平级，nuve不支持多层对象引用翻译
function flat(object: Recordable, prefix: string) {
  let res: Recordable = {};
  Object.entries(object).forEach((item) => {
    const [k, v] = item;
    const key = prefix ? `${prefix}.${k}` : k;
    if (typeof v != 'object') {
      res[key] = v;
    } else {
      res = Object.assign(res, flat(v, key));
    }
  });
  return res;
}
