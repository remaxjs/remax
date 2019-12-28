import * as React from 'react';

export const hostComponents: {
  [key: string]: {
    alias?: {
      [key: string]: string;
    };
  };
} = (process.env.REMAX_HOST_COMPONENTS as any) || {};

export default function createHostComponent<P = any>(
  name: string,
  component?: React.ComponentType<P>
) {
  if (component) {
    return component;
  }

  const Component: React.FC<P> = (props, ref: any) => {
    const { children = [] } = props;
    return React.createElement(name, { ...props, ref }, children);
  };
  return React.forwardRef<{}, React.PropsWithChildren<P>>(Component);
}
