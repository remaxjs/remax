import kebabCase from 'lodash.kebabcase';
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

    return prop;
  }

  return kebabCase(prop);
}

function getValue(prop: string, value: any): any {
  if (prop.toLowerCase().endsWith('style') && prop !== 'layerStyle') {
    return plainStyle(value);
  }

  return value;
}

export interface GenericProps {
  [key: string]: any;
}

export default function propsAlias(props: GenericProps, isNative = false) {
  const aliasProps: GenericProps = {};

  Object.keys(props).forEach(prop => {
    aliasProps[getAlias(prop, isNative)] = getValue(prop, props[prop]);
  });

  return aliasProps;
}
