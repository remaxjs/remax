import * as path from 'path';
import { getAlias } from 'remax/cjs/propsAlias';
export { default as hostComponents } from './hostComponents';

export function getNativePropName(props: any, isNative = false, type?: string) {
  return getAlias(props, isNative, 'toutiao', type);
}

export const name = 'toutiao';

export const extensions = {
  template: {
    extension: '.ttml',
    tag: 'import',
    src: 'src',
  },
  style: '.ttss',
  include: {
    tag: 'include',
    src: 'src',
  },
};

const templateBaseDir = path.join(__dirname, '../../../../templates');

export const templates = {
  base: path.join(templateBaseDir, 'toutiao/base.ejs'),
  component: path.join(templateBaseDir, 'toutiao/component.ejs'),
  page: path.join(templateBaseDir, 'toutiao/page.ejs'),
};

export const moduleFormat = 'cjs';

export function getIcons(config: any) {
  if (!config.tabBar) {
    return [];
  }

  const tabs: Array<{ iconPath: string; selectedIconPath: string }> =
    config.tabBar.list;

  return (tabs || []).reduce<string[]>(
    (images, tab) => [...images, tab.iconPath, tab.selectedIconPath],
    []
  );
}
