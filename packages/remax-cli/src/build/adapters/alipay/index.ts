import * as path from 'path';
export {
  getAlias as getNativePropName,
} from 'remax/cjs/adapters/alipay/components/propsAlias';

export const name = 'alipay';

export function hostComponents(component: string) {
  try {
    return require(`./hostComponents/${component}`);
  } catch (err) {
    return false;
  }
}

export const extensions = {
  template: {
    extension: '.axml',
    tag: 'import',
    src: 'src',
  },
  style: '.acss',
  jsHelper: {
    extension: '.sjs',
    tag: 'import-sjs',
    src: 'from',
  },
  include: {
    tag: 'include',
    src: 'src',
  },
};

const templateBaseDir = path.join(__dirname, '../../../../templates');

export const templates = {
  component: path.join(templateBaseDir, 'alipay/component.ejs'),
  page: path.join(templateBaseDir, 'alipay/page.ejs'),
  jsHelper: path.join(templateBaseDir, 'helper.js'),
};

export const moduleFormat = 'esm';

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
