import * as React from 'react';
import { formatDisplayName } from './formatDisplayName';

export function createHostComponent<P = any>(name: string, component?: React.ComponentType<P>) {
  if (component) {
    return component;
  }

  const Component: React.ForwardRefRenderFunction<any, P> = (props, ref: React.Ref<any>) => {
    const { children = [] } = props;
    return React.createElement(name, { ...props, ref }, children);
  };

  if (process.env.NODE_ENV === 'development') {
    Component.displayName = formatDisplayName(name);
  }

  return React.forwardRef<any, React.PropsWithChildren<P>>(Component);
}
