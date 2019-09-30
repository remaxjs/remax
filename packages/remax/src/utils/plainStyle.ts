import { CSSProperties } from 'react';

const vendorPrefixes = ['webkit', 'moz', 'ms', 'o'];

const transformReactStyleKey = (key: string) => {
  let styleValue = key.replace(/\.?([A-Z]+)/g, function(_x: any, y: string) {
    return '-' + y.toLowerCase();
  });

  const firstWord = styleValue.split('-').filter(s => s)[0];
  styleValue = styleValue.replace(/^-/, '');

  if (vendorPrefixes.find(prefix => prefix === firstWord)) {
    styleValue = '-' + styleValue;
  }

  return styleValue;
};

const plainStyle = (style: CSSProperties | null | undefined) => {
  if (!style) {
    return '';
  }
  return Object.keys(style)
    .reduce((acc: string[], key) => {
      const value = (style as any)[key];
      return [...acc, `${transformReactStyleKey(key)}:${value};`];
    }, [])
    .join('');
};

export default plainStyle;
