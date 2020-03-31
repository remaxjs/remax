declare const plugin: () => {
  name: string;
  meta: {
    global: string;
    template: {
      extension: string;
      tag: string;
      src: string;
    };
    style: string;
    include: {
      tag: string;
      src: string;
    };
    ejs: {
      base: string;
      page: string;
    };
  };
};
export default plugin;
