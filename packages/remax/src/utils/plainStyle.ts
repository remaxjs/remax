import { CSSProperties } from 'react';

const vendorPrefixes = ['webkit', 'moz', 'ms', 'o'];

const transformReactStyleKey = (key: string) => {
  // css3 var
  if (key?.startsWith('--')) {
    return key;
  }

  let styleValue = key.replace(/\.?([A-Z]+)/g, function(_x: any, y: string) {
    return '-' + y.toLowerCase();
  });

  // vendor prefix
  if (styleValue?.startsWith('-')) {
    const firstWord = styleValue.split('-').filter(s => s)[0];
    styleValue = styleValue.replace(/^-/, '');

    if (vendorPrefixes.find(prefix => prefix === firstWord)) {
      styleValue = '-' + styleValue;
    }
  }

  return styleValue;
};

const transformPx = (value: string) => {
  if (typeof value !== 'string') {
    return value;
  }

  return value.replace(/\b(\d+(\.\d+)?)px\b/g, function(match, x) {
    const targetUnit = 'rpx';
    const size = Number(x);
    return size % 1 === 0 ? size + targetUnit : size.toFixed(2) + targetUnit;
  });
};

const plainStyle = (style: CSSProperties | null | undefined) => {
  if (!style) {
    return '';
  }
  return Object.keys(style)
    .reduce((acc: string[], key) => {
      const value = (style as any)[key];
      return [
        ...acc,
        `${transformReactStyleKey(key)}:${
          __REMAX_PX2RPX__ ? transformPx(value) : value
        };`,
      ];
    }, [])
    .join('');
};

export default plainStyle;
