import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { pageEvents } from '@remax/macro';
import winPath from '../../winPath';

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

export default () => {
  return {
    pre(state: any) {
      pageEvents.delete(winPath(state.opts.filename));
    },
    visitor: {
      // 解析 class properties 编译后的代码
      StringLiteral: (path: NodePath<t.StringLiteral>, state: any) => {
        const { node } = path;
        const importer = winPath(state.file.opts.filename);

        // 只要生命周期 Literal 存在就标记为用到了生命周期
        if (!lifecycleEvents.includes(node.value)) {
          return;
        }

        pageEvents.set(importer, pageEvents.get(importer)?.add(node.value) ?? new Set([node.value]));
      },
      Identifier: (path: NodePath<t.Identifier>, state: any) => {
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
