export interface Adapter {
  name: string;

  extensions: {
    template: string;
    style: string;
  };

  templates: {
    base: string;
    component: string;
    page: string;
  };

  hostComponents: (
    component: string
  ) => {
    props: string[];
  };

  propsAlias: (key: string) => string;

  moduleFormat: 'cjs' | 'esm';
}
