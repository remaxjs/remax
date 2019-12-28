import * as RuntimeOptions from './RuntimeOptions';
import plainStyle from './utils/plainStyle';
import { hostComponents } from './createHostComponent';

export function getAlias(prop: string, type: string) {
  prop = prop.replace('className', 'class');

  const hostComponent = hostComponents[type];

  return hostComponent?.alias?.[prop] ?? prop;
}

function getValue(prop: string, value: any): any {
  if (prop.toLowerCase().endsWith('style') && prop !== 'layerStyle') {
    return plainStyle(value, RuntimeOptions.pxToRpx);
  }

  return value;
}

export interface GenericProps {
  [key: string]: any;
}

export default function propsAlias(props: GenericProps, type: string) {
  if (!props) {
    return props;
  }

  const aliasProps: GenericProps = {};

  Object.keys(props).forEach(prop => {
    aliasProps[getAlias(prop, type)] = getValue(prop, props[prop]);
  });

  return aliasProps;
}
