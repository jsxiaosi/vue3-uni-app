import type { Recordable } from '#/global';

export interface Messages {
  [key: string]: string;
}

export const defaultFilePath = (config: Recordable) => {
  const messages: Messages = {};
  Object.keys(config).forEach((key) => {
    const name: RegExpMatchArray = key.match(/^\.\/([\s\S]+)\/([\s\S]+)\.ts$/) || [];
    const valueName = name[2];
    const value = config[key].default || {};
    messages[valueName] = value;
  });

  return messages;
};
