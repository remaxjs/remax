import { CSSProperties } from 'react';
import { isUnitlessNumber } from './CSSProperty';
import { find, RuntimeOptions } from '@remax/framework-shared';

const vendorPrefixes = ['webkit', 'moz', 'ms', 'o'];

const transformReactStyleKey = (key: string) => {
  // css3 var
  if (key?.startsWith('--')) {
    return key;
  }

  let styleValue = key.replace(/\.?([A-Z]+)/g, function (_x: any, y: string) {
    return '-' + y.toLowerCase();
  });

  // vendor prefix
  if (styleValue?.startsWith('-')) {
    const firstWord = styleValue.split('-').filter(s => s)[0];
    styleValue = styleValue.replace(/^-/, '');

    if (find(vendorPrefixes, prefix => prefix === firstWord)) {
      styleValue = '-' + styleValue;
    }
  }

  return styleValue;
};

const transformPx = (value: string) => {
  if (typeof value !== 'string') {
    return value;
  }

  return value.replace(/\b(\d+(\.\d+)?)px\b/g, function (match, x) {
    const targetUnit = 'rpx';
    const size = Number(x);
    return size % 1 === 0 ? size + targetUnit : size.toFixed(2) + targetUnit;
  });
};

const plainStyle = (style: CSSProperties) => {
  return Object.keys(style)
    .reduce((acc: string[], key) => {
      let value = (style as any)[key];

      if (!Number.isNaN(Number(value)) && !isUnitlessNumber[key]) {
        value = value + 'rpx';
      }

      return [...acc, `${transformReactStyleKey(key)}:${RuntimeOptions.get('pxToRpx') ? transformPx(value) : value};`];
    }, [])
    .join('');
};

export default plainStyle;
