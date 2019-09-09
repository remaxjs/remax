import * as path from 'path';
import { Alias } from '..';

export const name = 'toutiao';

export function hostComponents(component: string) {
  return require(`./hostComponents/${component}`);
}

export const extensions = {
  template: '.ttml',
  style: '.ttss',
};

const templateBaseDir = path.join(__dirname, '../../../../templates');

export const templates = {
  base: path.join(templateBaseDir, 'toutiao/base.ejs'),
  component: path.join(templateBaseDir, 'toutiao/component.ejs'),
  page: path.join(templateBaseDir, 'toutiao/page.ejs'),
};

export const moduleFormat = 'cjs';

// TODO: alias 方法在 remax 和 remax-cli 都重复定义了，想办法 DRY
const alias: Alias = {
  className: 'class',
  onClick: 'bindtap',
};

const nativeAlias: Alias = {
  className: 'class',
  onClick: 'bindclick',
};

export function getNativePropName(prop: string, isNative = false) {
  const aliasProp = isNative ? nativeAlias[prop] : alias[prop];

  if (aliasProp) {
    return aliasProp;
  }

  if (prop.startsWith('on')) {
    return prop.toLowerCase().replace('on', 'bind');
  }

  return prop;
}

export function getIcons(config: any) {
  if (!config.tabBar) {
    return [];
  }

  const tabs: Array<{ iconPath: string; selectedIconPath: string }> =
    config.tabBar.list;

  if (tabs) {
    return tabs.reduce<string[]>(
      (images, tab) => [...images, tab.iconPath, tab.selectedIconPath],
      []
    );
  }

  return [];
}
