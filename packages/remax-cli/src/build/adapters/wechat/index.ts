import * as path from 'path';

export const name = 'wechat';

export function hostComponents(component: string) {
  return require(`./hostComponents/${component}`);
}

export const extensions = {
  template: '.wxml',
  style: '.wxss',
  jsHelper: '.wxs',
};

const templateBaseDir = path.join(__dirname, '../../../../templates');

export const templates = {
  base: path.join(templateBaseDir, 'wechat/base.ejs'),
  component: path.join(templateBaseDir, 'wechat/component.ejs'),
  page: path.join(templateBaseDir, 'wechat/page.ejs'),
  jsHelper: path.join(templateBaseDir, 'reduce.js'),
};

export const moduleFormat = 'cjs';
