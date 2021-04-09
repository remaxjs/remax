export function find<P>(list: P[], predicate: (value: P, i: number, list: P[]) => boolean) {
  for (let i = 0; i < list.length; i++) {
    const value = list[i];
    if (predicate(value, i, list)) {
      return value;
    }
  }
}

export function includes<P>(list: P[], searchElement: any) {
  for (let i = 0; i < list.length; i++) {
    const value = list[i];
    if (value === searchElement) {
      return true;
    }
  }
  return false;
}
