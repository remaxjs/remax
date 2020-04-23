import { ComponentClass } from 'react';

export default function isClassComponent(Component: any): Component is ComponentClass {
  return Component.prototype && typeof Component.prototype.render === 'function';
}
