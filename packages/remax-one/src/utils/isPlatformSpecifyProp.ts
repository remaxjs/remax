const isPlatformSpecifyProp = (prop: string) => prop.match(/^(alipay|wechat|toutiao)-/);

const normalizeWebSpecifyProp = (prop: string) => prop.replace(/^web-/, '');

export function filterProps<T>(props: T): T {
  return Object.keys(props).reduce<any>((acc, cur) => {
    if (isPlatformSpecifyProp(cur)) {
      return acc;
    }

    acc[normalizeWebSpecifyProp(cur)] = (props as any)[cur];

    return acc;
  }, {});
}

export default isPlatformSpecifyProp;
