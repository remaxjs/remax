export interface Adapter {
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
    defaultProps?: {
      [key: string]: any;
    };
  };

  propsAlias: {
    [key: string]: string;
  };

  moduleFormat: "cjs" | "esm";
}
