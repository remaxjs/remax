import { hostComponents } from 'remax/macro';

const stringifyHostComponents = () =>
  JSON.stringify(
    [...hostComponents.keys()].reduce((obj, key) => {
      obj[key] = {
        alias: hostComponents.get(key)?.alias || {},
      };

      return obj;
    }, {} as any)
  );

export default stringifyHostComponents;
