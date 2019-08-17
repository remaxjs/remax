import * as path from 'path';

export const name = 'alipay';

export function hostComponents(component: string) {
  return require(`./hostComponents/${component}`);
}

export const extensions = {
  template: '.axml',
  style: '.acss',
  jsHelper: '.sjs',
};

const templateBaseDir = path.join(__dirname, '../../../../templates');

export const templates = {
  base: path.join(templateBaseDir, 'alipay/base.ejs'),
  component: path.join(templateBaseDir, 'alipay/component.ejs'),
  page: path.join(templateBaseDir, 'alipay/page.ejs'),
  jsHelper: path.join(templateBaseDir, 'reduce.js'),
};

export const moduleFormat = 'esm';
