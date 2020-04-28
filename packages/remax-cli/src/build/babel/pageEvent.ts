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
  'BeforeTabItemTap',
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
      Identifier: (path: NodePath<t.Identifier>) => {
        if (skip) {
          return;
        }

        const { node } = path;

        // 只要生命周期 Identifer 存在就标记为用到了生命周期
        if (!lifecycleEvents.includes(node.name)) {
          return;
        }

        pageEvents.set(entry, pageEvents.get(entry)?.add(node.name) ?? new Set([node.name]));
      },
    },
  };
};
