import { IApi } from 'umi-types';
import getApp from './plugins/getApp';
import app from './plugins/app';
import page from './plugins/page';
import renameImport from './plugins/renameImport';
import selector from './plugins/selector';

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
      extraPostCSSPlugins: [selector],
    };
  });

  api.addHTMLStyle({
    content: `
    #remax-page {
      min-height: 100vh;
    }
    `,
  });
};
