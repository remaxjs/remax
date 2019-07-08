export default function pure(item: any) {
  let result: any = {};
  if (Array.isArray(item)) {
    result = item.map(item => pure(item));
  } else if (typeof item === 'object') {
    for (const key of Object.keys(item)) {
      if (key !== 'rootContext') {
        result[key] = pure(item[key]);
      }
    }
  } else {
    result = item;
  }

  return result;
}
