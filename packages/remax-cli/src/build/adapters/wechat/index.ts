import * as path from 'path';

export const name = 'wechat';

export function hostComponents(component: string) {
  return require(`./hostComponents/${component}`);
}

export const extensions = {
  template: '.wxml',
  style: '.wxss',
};

const templateBaseDir = path.join(__dirname, '../../../../templates/wechat');

export const templates = {
  base: path.join(templateBaseDir, 'base.ejs'),
  component: path.join(templateBaseDir, 'component.ejs'),
  page: path.join(templateBaseDir, 'page.ejs'),
};

export const moduleFormat = 'cjs';
