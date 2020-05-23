import * as React from 'react';

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function createHostComponent<P = any>(name: string, component?: React.ComponentType<P>) {
  if (component) {
    return component;
  }

  const Component: React.ForwardRefRenderFunction<any, P> = (props, ref: React.Ref<any>) => {
    const { children = [] } = props;
    return React.createElement(name, { ...props, ref }, children);
  };

  Component.displayName = capitalize(name);

  return React.forwardRef<any, React.PropsWithChildren<P>>(Component);
}
