import * as React from 'react';

export default function createNativeComponent(name: string) {
  const Component = React.forwardRef((props, ref) => {
    const newProps: any = { ...props };
    newProps.__ref =
      typeof ref === 'function'
        ? ref
        : (e: any) => {
            if (ref) {
              (ref as React.MutableRefObject<any>).current = e;
            }
          };
    return React.createElement(name, newProps, props.children);
  });
  Component.displayName = name;
  return Component;
}
