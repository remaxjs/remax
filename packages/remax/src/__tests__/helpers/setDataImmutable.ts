import immutable from 'object-path-immutable';

export default function setDataImmutable(data: any, changedData: any) {
  let ret = data || {};
  Object.keys(changedData).forEach(k => {
    const path = k.replace(/\[([^\]]+)\]/g, (_m, g) => {
      return `.${g}`;
    });
    ret = immutable.set(ret, path, changedData[k]);
  });
  return ret;
}
