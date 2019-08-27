import React, { forwardRef } from 'react';
import propsAlias from './propsAlias';

export default function factory<P = any>(component: string) {
  const Component: React.FC<P> = (props, ref: any) => {
    const { children = [] } = props;
    return React.createElement(
      component,
      propsAlias({ ...props, ref }),
      children
    );
  };
  return forwardRef<{}, P>(Component);
}
