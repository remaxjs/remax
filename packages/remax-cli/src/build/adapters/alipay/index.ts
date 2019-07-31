import * as path from 'path';

export function hostComponents(component: string) {
  return require(`./hostComponents/${component}`);
}

export const propsAlias: { [key: string]: string } = {
  className: 'class',
  onClick: 'onTap',
  onTap: 'onTap'
};

export const extensions = {
  template: '.axml',
  style: '.acss'
};

const templateBaseDir = path.join(__dirname, '../../../../templates/alipay');

export const templates = {
  base: path.join(templateBaseDir, 'base.ejs'),
  component: path.join(templateBaseDir, 'component.ejs'),
  page: path.join(templateBaseDir, 'page.ejs')
};

export const moduleFormat = 'esm';
