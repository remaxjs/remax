import { CSSProperties } from 'react';

const alias: { [prop: string]: string } = {
  className: 'class',
  activeColor: 'activeColor',
  backgroundColor: 'backgroundColor',
  onClick: 'bindtap',
};

function getAlias(prop: string) {
  let aliasProp = alias[prop];

  if (aliasProp) {
    return aliasProp;
  }

  if (prop.startsWith('on')) {
    return prop.toLowerCase().replace('on', 'bind');
  }

  return prop;
}

const transformReactStyleKey = (key: string) =>
  key
    .replace(/\.?([A-Z]+)/g, function(_x: any, y: string) {
      return '-' + y.toLowerCase();
    })
    .replace(/^-/, '');

const styleString = (style: CSSProperties) =>
  Object.keys(style)
    .reduce((acc: string[], key) => {
      const value = (style as any)[key];
      return [...acc, `${transformReactStyleKey(key)}:${value}`];
    }, [])
    .join(';');

export interface GenericProps {
  [key: string]: any;
}

export default function propsAlias<T>(props: GenericProps) {
  const aliasProps: GenericProps = {};

  Object.keys(props).forEach(prop => {
    if (prop === 'style') {
      aliasProps.style = styleString(props.style!);
    } else {
      aliasProps[getAlias(prop)] = props[prop];
    }
  });

  return aliasProps;
}
