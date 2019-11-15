import React, { forwardRef } from 'react';

type defaultProps = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
};

const hostComponent = new Set();

export function isHostComponent(name: string) {
  return hostComponent.has(name);
}

export default function factory<P = any>(component: string) {
  hostComponent.add(component);
  const Component: React.FC<P & defaultProps> = (props, ref: any) => {
    const { children = [] } = props;
    return React.createElement(component, { ...props, ref }, children);
  };
  return forwardRef<{}, React.PropsWithChildren<P & defaultProps>>(Component);
}
