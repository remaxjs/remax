import { CSSProperties } from 'react';

const transformReactStyleKey = (key: string) =>
  key
    .replace(/\.?([A-Z]+)/g, (_x: unknown, y: string) => `-${y.toLowerCase()}`)
    .replace(/^-/, '');

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
