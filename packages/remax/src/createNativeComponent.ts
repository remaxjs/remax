import * as React from 'react';

export default function createNativeComponent(name: string) {
  return React.forwardRef((props, ref) => {
    if (typeof ref === 'string') {
      console.error(
        '不支持使用 string 获取小程序组件 ref，请使用回调或 React.createRef/React.useRef'
      );
    }
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
}
