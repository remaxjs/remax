import path from 'path';
import ejs from 'ejs';
import webpack from 'webpack';
// @ts-ignore: fixme later
import babelPluginComponentStaticInfo from '@remax/babel-plugin-remax-static-info';

interface PageWxmlOptions {
  // TODO: Add some plugin options here
}

class PageWxmlWebpackPlugin {
  public name: string = 'BaseWxmlWebpackPlugin';
  private options: PageWxmlOptions;
  private compiler: webpack.Compiler | undefined;

  constructor(options: PageWxmlOptions = {}) {
    this.options = options;
  }

  apply(compiler: webpack.Compiler) {
    this.compiler = compiler;

    if ('hooks' in this.compiler) {
      this.compiler.hooks.emit.tapAsync(this.name, this.emit);
    } else {
      // @ts-ignore: for webpack v2/v3
      this.compiler.plugin('emit', this.emit);
    }
  }

  emit(compilation: any, cb: () => void) {
    const pageWxmlTpl = path.join(__dirname, '../../../templates/page.wxml.ejs');
    ejs.renderFile(pageWxmlTpl, {}, {}, (err: Error, str: string | undefined) => {
      if (err) {
        throw err;
      }
      const { chunks } = compilation;
      const content: string = str || '';

      chunks.forEach((item: any) => {
        compilation.assets[`${item.name}.wxml`] = {
          source: () => content,
          size: () => content.length,
        };
      });

      cb();
    });
  }
}

export default PageWxmlWebpackPlugin;
