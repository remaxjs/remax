import * as path from 'path';

export const name = 'toutiao';

export function hostComponents(component: string) {
  return require(`./hostComponents/${component}`);
}

export const extensions = {
  template: '.ttml',
  style: '.ttss',
};

const templateBaseDir = path.join(__dirname, '../../../../templates');

export const templates = {
  base: path.join(templateBaseDir, 'toutiao/base.ejs'),
  component: path.join(templateBaseDir, 'toutiao/component.ejs'),
  page: path.join(templateBaseDir, 'toutiao/page.ejs'),
};

export const moduleFormat = 'cjs';
