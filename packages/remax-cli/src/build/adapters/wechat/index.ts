import * as path from 'path';
export {
  getAlias as getNativePropName,
} from 'remax/cjs/adapters/wechat/components/propsAlias';

export const name = 'wechat';

export function hostComponents(component: string) {
  try {
    return require(`./hostComponents/${component}`);
  } catch (err) {
    return false;
  }
}

export const extensions = {
  template: {
    extension: '.wxml',
    tag: 'import',
    src: 'src',
  },
  style: '.wxss',
  jsHelper: {
    extension: '.wxs',
    tag: 'wxs',
    src: 'src',
  },
  include: {
    tag: 'include',
    src: 'src',
  },
};

const templateBaseDir = path.join(__dirname, '../../../../templates');

export const templates = {
  base: path.join(templateBaseDir, 'wechat/base.ejs'),
  component: path.join(templateBaseDir, 'wechat/component.ejs'),
  page: path.join(templateBaseDir, 'wechat/page.ejs'),
  jsHelper: path.join(templateBaseDir, 'helper.js'),
};

export const moduleFormat = 'cjs';

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
