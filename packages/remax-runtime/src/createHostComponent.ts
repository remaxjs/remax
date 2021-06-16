import * as React from 'react';
import { RuntimeOptions } from '@remax/framework-shared';

export default function createHostComponent<P = any>(name: string, component?: React.ComponentType<P>) {
  if (component) {
    return component;
  }

  const Component = React.forwardRef((props, ref: React.Ref<any>) => {
    const { children = [] } = props;
    let element = React.createElement(name, { ...props, ref }, children);
    element = RuntimeOptions.get('pluginDriver').onCreateHostComponentElement(element) as React.DOMElement<any, any>;
    return element;
  });
  Component.displayName = name;
  return RuntimeOptions.get('pluginDriver').onCreateHostComponent(Component);
}
