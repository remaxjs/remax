import * as path from 'path';
export {
  getAlias as getNativePropName,
} from 'remax/cjs/adapters/toutiao/components/propsAlias';

export const name = 'toutiao';

export function hostComponents(component: string) {
  try {
    return require(`./hostComponents/${component}`);
  } catch (err) {
    return false;
  }
}

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

  if (tabs) {
    return tabs.reduce<string[]>(
      (images, tab) => [...images, tab.iconPath, tab.selectedIconPath],
      []
    );
  }

  return [];
}
