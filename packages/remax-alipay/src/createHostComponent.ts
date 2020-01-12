import * as React from 'react';

export default function createHostComponent<P = any>(name: string) {
  const Component: React.FC<P> = (props, ref: any) => {
    const { children = [] } = props;
    return React.createElement(name, { ...props, ref }, children);
  };
  return React.forwardRef<{}, React.PropsWithChildren<P>>(Component);
}
