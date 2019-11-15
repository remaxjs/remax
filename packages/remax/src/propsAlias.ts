import { TYPE_TEXT } from './constants';
import kebabCase from 'lodash.kebabcase';
import Platform from './Platform';
import plainStyle from './utils/plainStyle';
import { isHostComponent as isWechatHostComponent } from './adapters/wechat/components/factory';
import { isHostComponent as isAlipayHostComponent } from './adapters/alipay/components/factory';
import { isHostComponent as isToutiaoHostComponent } from './adapters/toutiao/components/factory';

export function isHostComponent(name: string) {
  if (name === TYPE_TEXT) {
    return true;
  }

  switch (Platform.current) {
    case 'wechat':
      return isWechatHostComponent(name);
    case 'alipay':
      return isAlipayHostComponent(name);
    case 'toutiao':
      return isToutiaoHostComponent(name);
  }

  return false;
}

function functionPropAlias(prop: string, platform?: string) {
  prop = prop.replace(/Click$/, 'Tap');

  if (platform === 'alipay') {
    return prop;
  }

  prop = prop.toLowerCase().replace('on', 'bind');

  return prop;
}

export function getAlias(prop: string, isNative = false, platform?: string) {
  prop = prop.replace('className', 'class').replace('ClassName', 'Class');

  if (isNative) {
    return prop;
  }

  if (prop.startsWith('on') || prop.startsWith('catch')) {
    return functionPropAlias(prop, platform);
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

export default function propsAlias(
  props: GenericProps,
  isNative = false,
  platform = Platform.current
) {
  if (!props) {
    return props;
  }

  const aliasProps: GenericProps = {};

  Object.keys(props).forEach(prop => {
    aliasProps[getAlias(prop, isNative, platform)] = getValue(
      prop,
      props[prop]
    );
  });

  return aliasProps;
}
