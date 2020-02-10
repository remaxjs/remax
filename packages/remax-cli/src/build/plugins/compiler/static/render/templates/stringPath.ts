export default function stringPath(path: Array<string | number>) {
  return path.reduce<string>((acc, current) => {
    if (typeof current === 'string') {
      if (acc) {
        acc += '.' + current;
      } else {
        acc += current;
      }
    } else {
      acc += '[' + current + ']';
    }

    return acc;
  }, '');
}
