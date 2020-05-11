import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { appEvents } from '@remax/macro';
import winPath from '../../winPath';

const lifecycleEvents = ['onLaunch', 'onShow', 'onHide', 'onError', 'onShareAppMessage', 'onPageNotFound'];

export default () => {
  return {
    pre(state: any) {
      appEvents.delete(winPath(state.opts.filename));
    },
    visitor: {
      // 解析 class properties 编译后的代码
      StringLiteral: (path: NodePath<t.StringLiteral>, state: any) => {
        const importer = winPath(state.file.opts.filename);
        const { node } = path;

        // 只要生命周期 Literal 存在就标记为用到了生命周期
        if (!lifecycleEvents.includes(node.value)) {
          return;
        }

        appEvents.set(importer, appEvents.get(importer)?.add(node.value) ?? new Set([node.value]));
      },
      Identifier: (path: NodePath<t.Identifier>, state: any) => {
        const importer = winPath(state.file.opts.filename);
        const { node } = path;

        // 只要生命周期 Identifer 存在就标记为用到了生命周期
        if (!lifecycleEvents.includes(node.name)) {
          return;
        }

        appEvents.set(importer, appEvents.get(importer)?.add(node.name) ?? new Set([node.name]));
      },
    },
  };
};
