import plainStyle from '../../../utils/plainStyle';

const alias: { [prop: string]: string } = {};

export function getAlias(prop: string, isNative = false) {
  const aliasProp = alias[prop];

  if (aliasProp) {
    return aliasProp;
  }

  if (prop.endsWith('className')) {
    return prop.replace('className', 'class');
  }

  if (prop.startsWith('on')) {
    prop = prop.toLowerCase().replace('on', 'bind');

    if (!isNative) {
      prop = prop.replace('click', 'tap');
    }
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

export default function propsAlias<T>(props: GenericProps, isNative = false) {
  const aliasProps: GenericProps = {};

  Object.keys(props).forEach(prop => {
    aliasProps[getAlias(prop, isNative)] = getValue(prop, props[prop]);
  });

  return aliasProps;
}
