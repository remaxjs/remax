import * as path from 'path';

const plugin = () => {
  return {
    name: 'remax-web',
    meta: {
      global: 'tt',
      template: {
        extension: '.ttml',
        tag: 'import',
        src: 'src',
      },
      style: '.ttss',
      include: {
        tag: 'include',
        src: 'src',
      },
      ejs: {
        base: path.join(EJS_TPL_ROOT, 'base.ejs'),
        page: path.join(EJS_TPL_ROOT, 'page.ejs'),
      },
    },
  };
};

export default plugin;
