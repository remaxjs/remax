import kebabCase from 'lodash.kebabcase';
import plainStyle from '../../../utils/plainStyle';

const alias: any = {
  className: 'class',
  onClick: 'onTap',
  catchClick: 'catchTap',
};

const nativeAlias: any = {
  className: 'class',
};

export function getAlias(prop: string, isNative = false) {
  const aliasProp = isNative ? nativeAlias[prop] : alias[prop];

  if (aliasProp) {
    return aliasProp;
  }

  if (prop.startsWith('on') || prop.startsWith('catch')) {
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
    if (prop === 'style') {
      aliasProps.style = plainStyle(props.style!);
    } else {
      aliasProps[getAlias(prop, isNative)] = getValue(prop, props[prop]);
    }
  });

  return aliasProps;
}
