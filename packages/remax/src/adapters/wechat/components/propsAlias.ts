import plainStyle from '../../../utils/plainStyle';

const alias: { [prop: string]: string } = {
  activeColor: 'activeColor',
  backgroundColor: 'backgroundColor',
  onClick: 'bindtap',
  catchClick: 'catchtap',
  enable3D: 'enable-3D',
  hTouchMove: 'htouchmove',
  vTouchMove: 'vtouchmove',
};

function getAlias(prop: string) {
  const aliasProp = alias[prop];

  if (aliasProp) {
    return aliasProp;
  }

  if (prop.endsWith('className')) {
    return prop.replace('className', 'class');
  }

  if (prop.startsWith('on') || prop.startsWith('catch')) {
    return prop.toLowerCase().replace('on', 'bind');
  }

  return prop;
}

function getValue(prop: string, value: any): any {
  if (prop.endsWith('style') && prop !== 'layer-style') {
    return plainStyle(value);
  }

  return value;
}

export interface GenericProps {
  [key: string]: any;
}

export default function propsAlias<T>(props: GenericProps) {
  const aliasProps: GenericProps = {};

  Object.keys(props).forEach(prop => {
    aliasProps[getAlias(prop)] = getValue(prop, props[prop]);
  });

  return aliasProps;
}
