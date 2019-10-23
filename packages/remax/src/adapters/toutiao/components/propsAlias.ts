import kebabCase from 'lodash/kebabCase';
import plainStyle from '../../../utils/plainStyle';

const alias: { [prop: string]: string } = {};

export function getAlias(prop: string, isNative = false, isCompile = false) {
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

  return isCompile ? kebabCase(prop) : prop;
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

export default function propsAlias(
  props: GenericProps,
  isNative = false,
  isCompile = false
) {
  const aliasProps: GenericProps = {};

  Object.keys(props).forEach(prop => {
    aliasProps[getAlias(prop, isNative, isCompile)] = getValue(
      prop,
      props[prop]
    );
  });

  return aliasProps;
}
