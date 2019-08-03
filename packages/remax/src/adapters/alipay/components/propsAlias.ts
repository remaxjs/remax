import { CSSProperties } from 'react';

const alias: any = {
  className: 'class',
  onClick: 'onTap',
};

function getAlias(prop: string) {
  let aliasProp = alias[prop];

  if (aliasProp) {
    return aliasProp;
  }

  return prop;
}

const styleString = (style: CSSProperties) =>
  Object.keys(style)
    .reduce((acc: string[], key) => {
      const value = (style as any)[key];
      return [...acc, `${key}:${value}`];
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
