import { IApi } from 'umi-types';
import getApp from './plugins/getApp';
import app from './plugins/app';
import page from './plugins/page';
import renameImport from './plugins/renameImport';
import selector from './plugins/selector';
import reactPlugin from 'umi-plugin-react';

export default (api: IApi, opts: any = {}) => {
  api.modifyAFWebpackOpts((memo: any) => {
    // antd ssr not enabled
    memo.babel.plugins = [getApp, renameImport, app, page];
    return memo;
  });

  api.modifyDefaultConfig((memo: any) => {
    return {
      // 默认使用单数目录
      ...memo,
      extraPostCSSPlugins: [...(memo.extraPostCSSPlugins || []), selector],
    };
  });

  api.addHTMLStyle({
    content: `
    #remax-page {
      min-height: 100vh;
    }
    `,
  });

  api.registerPlugin({
    id: 'umi-plugin-react',
    apply: reactPlugin,
    opts: {
      hd: true,
      fastClick: true,
    },
  });
};
