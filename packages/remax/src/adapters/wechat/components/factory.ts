import React, { forwardRef } from 'react';

export default function factory<P = any>(component: string) {
  const Component: React.FC<P> = (props, ref: any) => {
    const { children = [] } = props;
    return React.createElement(component, { ...props, ref }, children);
  };
  return forwardRef<{}, React.PropsWithChildren<P>>(Component);
}
