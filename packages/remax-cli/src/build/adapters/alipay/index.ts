import * as path from 'path';
import { Alias } from '..';

export const name = 'alipay';

export function hostComponents(component: string) {
  return require(`./hostComponents/${component}`);
}

export const extensions = {
  template: '.axml',
  style: '.acss',
  jsHelper: '.sjs',
  jsTag: 'import-sjs',
  moduleName: 'name',
};

const templateBaseDir = path.join(__dirname, '../../../../templates');

export const templates = {
  component: path.join(templateBaseDir, 'alipay/component.ejs'),
  page: path.join(templateBaseDir, 'alipay/page.ejs'),
  jsHelper: path.join(templateBaseDir, 'helper.js'),
};

export const moduleFormat = 'esm';

// TODO: remax 和 remax-cli 重复定义了，要 DRY
const alias: Alias = {
  className: 'class',
  onClick: 'onTap',
  catchClick: 'catchTap',
};

const nativeAlias: Alias = {
  className: 'class',
};

export function getNativePropName(prop: string, isNative = false) {
  const aliasProp = isNative ? nativeAlias[prop] : alias[prop];

  if (aliasProp) {
    return aliasProp;
  }

  return prop;
}

export function getIcons(config: any) {
  if (!config.tabBar) {
    return [];
  }

  const tabs: Array<{ icon: string; activeIcon: string }> = config.tabBar.items;

  if (tabs) {
    return tabs.reduce<string[]>(
      (images, tab) => [...images, tab.icon, tab.activeIcon],
      []
    );
  }

  return [];
}
