import plainStyle from '../../../utils/plainStyle';

const alias: any = {
  className: 'class',
  onClick: 'onTap',
};

const nativeAlias: any = {
  className: 'class',
};

export function getAlias(prop: string, isNative = false) {
  const aliasProp = isNative ? nativeAlias[prop] : alias[prop];

  if (aliasProp) {
    return aliasProp;
  }

  return prop;
}

export interface GenericProps {
  [key: string]: any;
}

export default function propsAlias<T>(props: GenericProps, isNative = false) {
  const aliasProps: GenericProps = {};

  Object.keys(props).forEach(prop => {
    if (prop === 'style') {
      aliasProps.style = plainStyle(props.style!);
    } else {
      aliasProps[getAlias(prop, isNative)] = props[prop];
    }
  });

  return aliasProps;
}
