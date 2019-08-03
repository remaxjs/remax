import * as path from 'path';

export function hostComponents(component: string) {
  return require(`./hostComponents/${component}`);
}

export function propsAlias(prop: keyof typeof alias) {
  const alias = {
    className: 'class',
    onClick: 'bindtap'
  };

  let aliasProp = alias[prop];

  if (aliasProp) {
    return aliasProp;
  }

  if (prop.startsWith('on')) {
    return prop.toLowerCase().replace('on', 'bind');
  }

  return prop;
}

export const extensions = {
  template: '.wxml',
  style: '.wxss'
};

const templateBaseDir = path.join(__dirname, '../../../../templates/weapp');

export const templates = {
  base: path.join(templateBaseDir, 'base.ejs'),
  component: path.join(templateBaseDir, 'component.ejs'),
  page: path.join(templateBaseDir, 'page.ejs')
};

export const moduleFormat = 'cjs';
