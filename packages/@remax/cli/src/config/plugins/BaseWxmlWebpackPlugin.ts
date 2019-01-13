import path from 'path';
import ejs from 'ejs';
import webpack from 'webpack';
// @ts-ignore: fixme later
import babelPluginComponentStaticInfo from '@remax/babel-plugin-remax-static-info';

interface BaseWxmlOptions {
  // TODO: Add some plugin options here
}

class BaseWxmlWebpackPlugin {
  public name: string = 'BaseWxmlWebpackPlugin';
  private options: BaseWxmlOptions;
  private compiler: webpack.Compiler | undefined;

  constructor(options: BaseWxmlOptions = {}) {
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
    const { components } = babelPluginComponentStaticInfo.getStaticInfo();

    const baseWxmlTpl = path.join(__dirname, '../../../templates/base.wxml.ejs');
    ejs.renderFile(baseWxmlTpl, { components }, {}, (err: Error, str: string | undefined) => {
      if (err) {
        throw err;
      }
      const content: string = str || '';
      compilation.assets['base.wxml'] = {
        source: () => content,
        size: () => content.length,
      };

      cb();
    });
  }
}

export default BaseWxmlWebpackPlugin;
