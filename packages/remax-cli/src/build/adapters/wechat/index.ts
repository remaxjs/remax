import * as path from 'path';
import { Alias } from '..';

export const name = 'wechat';

export function hostComponents(component: string) {
  return require(`./hostComponents/${component}`);
}

export const extensions = {
  template: '.wxml',
  style: '.wxss',
  jsHelper: '.wxs',
  jsTag: 'wxs',
  moduleName: 'module',
};

const templateBaseDir = path.join(__dirname, '../../../../templates');

export const templates = {
  base: path.join(templateBaseDir, 'wechat/base.ejs'),
  component: path.join(templateBaseDir, 'wechat/component.ejs'),
  page: path.join(templateBaseDir, 'wechat/page.ejs'),
  jsHelper: path.join(templateBaseDir, 'helper.js'),
};

export const moduleFormat = 'cjs';

// TODO: alias 方法在 remax 和 remax-cli 都重复定义了，想办法 DRY
const alias: Alias = {
  activeColor: 'activeColor',
  backgroundColor: 'backgroundColor',
  className: 'class',
  onClick: 'bindtap',
  catchClick: 'catchtap',
  enable3D: 'enable-3D',
  hTouchMove: 'htouchmove',
  vTouchMove: 'vtouchmove',
};

const nativeAlias: Alias = {
  className: 'class',
};

export function getNativePropName(prop: string, isNative = false) {
  const aliasProp = isNative ? nativeAlias[prop] : alias[prop];

  if (aliasProp) {
    return aliasProp;
  }

  if (prop.endsWith('className')) {
    return prop.replace('className', 'class');
  }

  if (prop.startsWith('on') || prop.startsWith('catch')) {
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
