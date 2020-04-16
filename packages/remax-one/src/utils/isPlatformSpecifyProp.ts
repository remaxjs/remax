const isPlatformSpecifyProp = (prop: string) => prop.match(/^(ali|wechat|toutiao)-/);

const normalizeWebSpecifyProp = (prop: string) => prop.replace(/^web-/, '');

export function filterProps<T>(props: T): T {
  return Object.keys(props).reduce<any>((acc, cur) => {
    let prop = cur;

    // web 平台没有 cli 帮助处理属性名称，直接去掉平台前缀
    if (process.env.REMAX_PLATFORM === 'web') {
      prop = normalizeWebSpecifyProp(cur);
    }

    if (isPlatformSpecifyProp(prop)) {
      return acc;
    }

    acc[prop] = (props as any)[cur];

    return acc;
  }, {});
}

export default isPlatformSpecifyProp;
