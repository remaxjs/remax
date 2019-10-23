export interface Adapter {
  name: string;

  extensions: {
    readonly template: {
      tag: string;
      src: string;
      extension: string;
    };
    readonly style: string;
    readonly jsHelper?: {
      extension: string;
      tag: string;
      src: string;
    };
    readonly include: {
      tag: string;
      src: string;
    };
  };

  templates: {
    component: string;
    page: string;
    base?: string;
    jsHelper?: string;
  };

  hostComponents: (component: string) => { props: string[] } | false;

  getNativePropName: (
    key: string,
    isNative?: boolean,
    isCompile?: boolean
  ) => string;

  getIcons: (config: any) => string[];

  moduleFormat: 'cjs' | 'esm';
}

export default ['alipay', 'wechat', 'toutiao', 'h5'];
