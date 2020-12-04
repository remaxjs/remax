import plainStyle from './utils/plainStyle';
import { RuntimeOptions } from '@remax/framework-shared';

export function getAlias(prop: string, type: string) {
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

  const prefix = `${RuntimeOptions.get('platform')}-`;

  const aliasProps: GenericProps = {};

  for (const prop in props) {
    // 平台前缀属性优先级提升
    // @see https://github.com/remaxjs/remax/issues/1409
    const hasPrefix = prop.startsWith(prefix);
    const key = getAlias(prop, type);
    const value = getValue(prop, props[prop]);
    if (hasPrefix) {
      aliasProps[key] = value;
    } else {
      aliasProps[key] = aliasProps[key] || value;
    }
  }

  return aliasProps;
}
