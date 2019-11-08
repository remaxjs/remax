import * as React from 'react';
import { TYPE_TEXT } from './constants';

export const hostComponents = new Set();

export function isHostComponent(type: string) {
  if (type === TYPE_TEXT) {
    return true;
  }

  return hostComponents.has(type);
}

export default function createHostComponent<P = any>(
  name: string,
  component?: React.ComponentType<P>
) {
  hostComponents.add(name);

  if (component) {
    return component;
  }

  const Component: React.FC<P> = (props, ref: any) => {
    const { children = [] } = props;
    return React.createElement(name, { ...props, ref }, children);
  };
  return React.forwardRef<{}, React.PropsWithChildren<P>>(Component);
}
