import * as React from 'react';

export default function createHostComponent<P = any>(name: string) {
  const Component: React.ForwardRefRenderFunction<any, P> = (
    props,
    ref: React.Ref<any>
  ) => {
    const { children = [] } = props;
    return React.createElement(name, { ...props, ref }, children);
  };
  return React.forwardRef(Component);
}
