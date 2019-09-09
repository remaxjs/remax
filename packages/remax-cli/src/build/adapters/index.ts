export interface Adapter {
  name: string;

  extensions: {
    template: string;
    style: string;
    jsHelper?: string;
    jsTag?: string;
    moduleName?: string;
  };

  templates: {
    base: string;
    component: string;
    page: string;
    jsHelper?: string;
  };

  hostComponents: (component: string) => { props: string[] };

  getNativePropName: (key: string, isNative?: boolean) => string;

  getIcons: (config: any) => string[];

  moduleFormat: 'cjs' | 'esm';
}

export interface Alias {
  [key: string]: string;
}

export default ['alipay', 'wechat', 'toutiao', 'h5'];
