import { isValidElementType } from '../ReactIs';

export default function isPlainObject(obj: any) {
  if (isValidElementType(obj)) {
    return false;
  }

  if (typeof obj == 'object' && obj !== null) {
    if (typeof Object.getPrototypeOf == 'function') {
      const proto = Object.getPrototypeOf(obj);
      return proto === Object.prototype || proto === null;
    }

    return Object.prototype.toString.call(obj) == '[object Object]';
  }

  return false;
}
