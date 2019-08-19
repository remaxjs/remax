export interface Adapter {
  name: string;

  extensions: {
    template: string;
    style: string;
    jsHelper: string;
  };

  templates: {
    base: string;
    component: string;
    page: string;
    jsHelper: string;
  };

  hostComponents: (component: string) => { props: string[] };

  propsAlias: (key: string) => string;

  moduleFormat: 'cjs' | 'esm';
}

export default ['alipay', 'wechat', 'h5'];
