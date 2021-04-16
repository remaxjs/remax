import type { Platform } from '@remax/types';

const extensions = ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'];

export const cssExtensions = ['.css', '.less', '.sass', '.scss', '.stylus', '.styl'];

const matcher = new RegExp(`(${extensions.join('|')})$`);

export const moduleMatcher = new RegExp(`(${extensions.filter(e => e !== '.json').join('|')})$`);

export const rename = (file: string, ext = '.js') => file.replace(matcher, ext);

export const targetExtensions = (target: Platform) => {
  let ext = extensions.map(ext => `.${target}${ext}`);
  if (target !== 'web') {
    ext = ext.concat(extensions.map(ext => `.mini${ext}`));
  }
  return ext.concat(extensions);
};
