import * as path from 'path';
import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { pageEvents } from '@remax/macro';
import winPath from '../../winPath';
import { Options } from '@remax/types';

const lifecycleEvents = [
  'onLoad',
  'onShow',
  'onHide',
  'onReady',
  'onPullDownRefresh',
  'onReachBottom',
  'onPageScroll',
  'onShareAppMessage',
  'onTitleClick',
  'onOptionMenuClick',
  'onPopMenuClick',
  'onPullIntercept',
  'onBack',
  'onKeyboardHeight',
  'onTabItemTap',
  'beforeTabItemTap',
  'onResize',
  'onUnload',
];

export default (options: Options) => {
  let skip = false;
  return {
    pre(state: any) {
      const importer = winPath(state.opts.filename);

      if (!importer.startsWith(winPath(path.join(options.cwd, options.rootDir)))) {
        skip = true;
        return;
      }

      pageEvents.delete(winPath(state.opts.filename));
    },
    visitor: {
      // 解析 class properties 编译后的代码
      StringLiteral: (path: NodePath<t.StringLiteral>, state: any) => {
        if (skip) {
          return;
        }

        const { node } = path;
        const importer = winPath(state.file.opts.filename);

        // 只要生命周期 Literal 存在就标记为用到了生命周期
        if (!lifecycleEvents.includes(node.value)) {
          return;
        }

        pageEvents.set(importer, pageEvents.get(importer)?.add(node.value) ?? new Set([node.value]));
      },
      Identifier: (path: NodePath<t.Identifier>, state: any) => {
        if (skip) {
          return;
        }

        const { node } = path;
        const importer = winPath(state.file.opts.filename);

        // 只要生命周期 Identifer 存在就标记为用到了生命周期
        if (!lifecycleEvents.includes(node.name)) {
          return;
        }

        pageEvents.set(importer, pageEvents.get(importer)?.add(node.name) ?? new Set([node.name]));
      },
    },
  };
};
