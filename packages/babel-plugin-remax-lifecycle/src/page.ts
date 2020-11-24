import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import Store from '@remax/build-store';

const lifecycleEvents = ['onPageScroll', 'onShareAppMessage'];

interface Options {
  test: (file: string) => boolean;
}

export default (options: Options) => {
  let skip = false;
  return {
    pre(state: any) {
      const importer = state.opts.filename;
      skip = !options.test(importer);
      if (skip) {
        return;
      }
      Store.pageEvents.delete(importer);
    },
    visitor: {
      // 解析 class properties 编译后的代码
      StringLiteral: (path: NodePath<t.StringLiteral>, state: any) => {
        if (skip) {
          return;
        }

        const { node } = path;
        const importer = state.file.opts.filename;

        // 只要生命周期 Literal 存在就标记为用到了生命周期
        if (!lifecycleEvents.includes(node.value)) {
          return;
        }

        Store.pageEvents.set(importer, Store.pageEvents.get(importer)?.add(node.value) ?? new Set([node.value]));
      },
      Identifier: (path: NodePath<t.Identifier>, state: any) => {
        if (skip) {
          return;
        }

        const { node } = path;
        const importer = state.file.opts.filename;

        // 只要生命周期 Identifer 存在就标记为用到了生命周期
        if (!lifecycleEvents.includes(node.name)) {
          return;
        }

        Store.pageEvents.set(importer, Store.pageEvents.get(importer)?.add(node.name) ?? new Set([node.name]));
      },
    },
  };
};
