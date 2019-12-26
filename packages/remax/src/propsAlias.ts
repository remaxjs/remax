import kebabCase from 'lodash.kebabcase';
import Platform from './Platform';
import * as RuntimeOptions from './RuntimeOptions';
import plainStyle from './utils/plainStyle';
import { hostComponents } from 'remax.macro';

function functionPropAlias(prop: string, platform?: string) {
  prop = prop.replace(/Click$/, 'Tap');

  if (platform === 'alipay') {
    return prop;
  }

  prop = prop.toLowerCase().replace('on', 'bind');

  return prop;
}

export function getAlias(
  prop: string,
  isNative = false,
  platform?: string,
  type?: string
) {
  if (!isNative && type) {
    const hostComponent = hostComponents.get(type);

    if (hostComponent?.alias?.[prop]) {
      return hostComponent.alias[prop];
    }
  }

  prop = prop.replace('className', 'class').replace('ClassName', 'Class');

  if (isNative) {
    return prop;
  }

  if (prop.startsWith('on') || prop.startsWith('catch')) {
    return functionPropAlias(prop, platform);
  }

  return kebabCase(prop);
}

function getValue(prop: string, value: any, pxToRpx: boolean): any {
  if (prop.toLowerCase().endsWith('style') && prop !== 'layerStyle') {
    return plainStyle(value, pxToRpx);
  }

  return value;
}

export interface GenericProps {
  [key: string]: any;
}

export default function propsAlias(
  props: GenericProps,
  isNative = false,
  platform = Platform.current,
  pxToRpx = RuntimeOptions.pxToRpx,
  type?: string
) {
  if (!props) {
    return props;
  }

  const aliasProps: GenericProps = {};

  Object.keys(props).forEach(prop => {
    aliasProps[getAlias(prop, isNative, platform, type)] = getValue(
      prop,
      props[prop],
      pxToRpx
    );
  });

  return aliasProps;
}
