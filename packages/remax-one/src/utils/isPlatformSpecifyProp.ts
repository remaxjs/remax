const isPlatformSpecifyProp = (prop: string) => prop.match(/^(alipay|wechat|toutiao)-/);

export function filterProps(props: any) {
  return Object.keys(props).reduce<any>((acc, cur) => {
    if (isPlatformSpecifyProp(cur)) {
      return acc;
    }

    acc[cur] = props[cur];

    return acc;
  }, {});
}

export default isPlatformSpecifyProp;
