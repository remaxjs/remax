export interface Adapter {
  name: string;

  extensions: {
    template: string;
    style: string;
    jsHelper?: string;
    jsTag?: string;
    srcName?: string;
  };

  templates: {
    component: string;
    page: string;
    base?: string;
    jsHelper?: string;
  };

  hostComponents: (component: string) => { props: string[] };

  getNativePropName: (key: string, isNative?: boolean) => string;

  getIcons: (config: any) => string[];

  moduleFormat: 'cjs' | 'esm';
}

export default ['alipay', 'wechat', 'toutiao', 'h5'];
