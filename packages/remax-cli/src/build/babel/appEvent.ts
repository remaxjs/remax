import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { appClassEvents } from '../webpack/plugins/Define';
import winPath from '../../winPath';

// TODO: 和 runtime 同步
const lifecycleEvents = [
  'onLaunch',
  'onShow',
  'onHide',
  'onError',
  'onShareAppMessage',
  'onPageNotFound',
  'onUnhandledRejection',
  'onThemeChange',
];

export default (appFilename: string) => {
  let skip = false;
  return {
    pre(state: any) {
      const importer = winPath(state.opts.filename);

      // TODO: app 的依赖也要收集
      skip = importer !== appFilename;

      if (skip) {
        return;
      }

      appClassEvents.delete(importer);
    },
    visitor: {
      // 解析 class properties 编译后的代码
      StringLiteral: (path: NodePath<t.StringLiteral>, state: any) => {
        if (skip) {
          return;
        }

        const importer = winPath(state.file.opts.filename);
        const { node } = path;

        // 只要生命周期 Literal 存在就标记为用到了生命周期
        if (!lifecycleEvents.includes(node.value)) {
          return;
        }

        appClassEvents.set(importer, appClassEvents.get(importer)?.add(node.value) ?? new Set([node.value]));
      },
      Identifier: (path: NodePath<t.Identifier>, state: any) => {
        if (skip) {
          return;
        }

        const importer = winPath(state.file.opts.filename);
        const { node } = path;

        // 只要生命周期 Identifer 存在就标记为用到了生命周期
        if (!lifecycleEvents.includes(node.name)) {
          return;
        }

        appClassEvents.set(importer, appClassEvents.get(importer)?.add(node.name) ?? new Set([node.name]));
      },
    },
  };
};
