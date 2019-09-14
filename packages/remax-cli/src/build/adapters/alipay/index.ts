import * as path from 'path';
export {
  getAlias as getNativePropName,
} from 'remax/lib/adapters/alipay/components/propsAlias';

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
