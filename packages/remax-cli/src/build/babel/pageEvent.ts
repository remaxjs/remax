import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { pageEvents } from 'remax/macro';

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

export default (entries: Array<{ path: string; key: string }>) => {
  let skip = false;
  let entry: string;

  return {
    pre(state: any) {
      entry = entries.find(e => e.path === state.opts.filename)?.path || '';
      skip = !entry;
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

        const parentNode = path.parentPath.node;

        if (t.isCallExpression(parentNode) && (parentNode.callee as any)?.name === '_defineProperty') {
          pageEvents.set(entry, pageEvents.get(entry)?.add(node.value) ?? new Set([node.value]));
        }
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

        // 非函数定义不处理
        if (!t.isFunctionExpression(path.parentPath.node)) {
          return;
        }

        pageEvents.set(entry, pageEvents.get(entry)?.add(node.name) ?? new Set([node.name]));
      },
    },
  };
};
