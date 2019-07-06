export default function isClassComponent(Component: any) {
  return Component.prototype && typeof Component.prototype.render === 'function';
}
