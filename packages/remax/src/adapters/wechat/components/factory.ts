import React, { forwardRef } from 'react';

const hostComponent = new Set();

export function isHostComponent(name: string) {
  return hostComponent.has(name);
}

export function addToHostComponent(name: string) {
  hostComponent.add(name);
}

export default function factory<P = any>(component: string) {
  addToHostComponent(component);
  const Component: React.FC<P> = (props, ref: any) => {
    const { children = [] } = props;
    return React.createElement(component, { ...props, ref }, children);
  };
  return forwardRef<{}, React.PropsWithChildren<P>>(Component);
}
