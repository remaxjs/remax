import plainStyle from './utils/plainStyle';
import * as RuntimeOptions from './RuntimeOptions';

export function getAlias(prop: string, type: string) {
  prop = prop.replace('className', 'class');

  const hostComponent = RuntimeOptions.get('hostComponents')[type];

  const prefix = `${RuntimeOptions.get('platform')}-`;

  // 判断是否是平台独有属性
  if (prop.startsWith(prefix)) {
    return prop.replace(new RegExp(`^${prefix}`), '');
  }

  return hostComponent?.alias?.[prop] ?? prop;
}

function getValue(prop: string, value: any): any {
  if (prop.toLowerCase().endsWith('style') && Object.prototype.toString.call(value) === '[object Object]') {
    return plainStyle(value);
  }

  return value;
}

export interface GenericProps {
  [key: string]: any;
}

export function propAlias(prop: string, value: any, type: string) {
  return [getAlias(prop, type), getValue(prop, value)];
}

export default function propsAlias(props: GenericProps, type: string) {
  if (!props) {
    return props;
  }

  const aliasProps: GenericProps = {};

  for (const prop in props) {
    aliasProps[getAlias(prop, type)] = getValue(prop, props[prop]);
  }

  return aliasProps;
}
