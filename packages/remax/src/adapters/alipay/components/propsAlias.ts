import plainStyle from '../../../utils/plainStyle';

const alias: any = {
  className: 'class',
  onClick: 'onTap',
};

function getAlias(prop: string) {
  const aliasProp = alias[prop];

  if (aliasProp) {
    return aliasProp;
  }

  return prop;
}

export interface GenericProps {
  [key: string]: any;
}

export default function propsAlias<T>(props: GenericProps) {
  const aliasProps: GenericProps = {};

  Object.keys(props).forEach(prop => {
    if (prop === 'style') {
      aliasProps.style = plainStyle(props.style!);
    } else {
      aliasProps[getAlias(prop)] = props[prop];
    }
  });

  return aliasProps;
}
