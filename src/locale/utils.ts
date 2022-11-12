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
    if (name[2] === 'app') {
      messages = { ...messages, ...flat(value, name[2]) };
    } else messages[valueName] = value;
  });

  return messages;
};

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
