import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { appEvents } from '@remax/macro';

const lifecycleEvents = ['onLaunch', 'onShow', 'onHide', 'onError', 'onShareAppMessage', 'onPageNotFound'];

export default (entry: string) => {
  let skip = false;

  return {
    pre(state: any) {
      skip = entry !== state.opts.filename;
    },
    visitor: {
      // 解析 class properties 编译后的代码
      StringLiteral: (path: NodePath<t.StringLiteral>) => {
        if (skip) {
          return;
        }

        const { node } = path;

        // 只要生命周期 Literal 存在就标记为用到了生命周期
        if (!lifecycleEvents.includes(node.value)) {
          return;
        }

        appEvents.set(entry, appEvents.get(entry)?.add(node.value) ?? new Set([node.value]));
      },
      Identifier: (path: NodePath<t.Identifier>) => {
        if (skip) {
          return;
        }

        const { node } = path;

        // 只要生命周期 Identifer 存在就标记为用到了生命周期
        if (!lifecycleEvents.includes(node.name)) {
          return;
        }

        appEvents.set(entry, appEvents.get(entry)?.add(node.name) ?? new Set([node.name]));
      },
    },
  };
};
