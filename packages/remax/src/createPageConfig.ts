import * as React from 'react';
import Platform from './Platform';
import createPageWrapper from './createPageWrapper';
import render from './render';
import { Lifecycle, callbackName } from './lifecycle';
import VNode, { Path } from './VNode';

function stringPath(path: Path) {
  if (Platform.isAlipay) {
    return path.reduce((acc, i) => {
      if (typeof i === 'number') {
        acc += `[${i}]`;
      } else {
        acc += `.${i}`;
      }
      return acc;
    }, '');
  } else {
    return path.join('.');
  }
}

export default function createPageConfig(Page: React.ComponentType<any>) {
  return {
    data: {
      action: {},
      root: [],
    },

    root: [],

    wrapper: null as any,

    lifecycleCallback: {} as any,

    onLoad(this: any, query: any) {
      this.updateData = (path: Path, data: any) => {
        const startTime = new Date().getTime();
        const msg = this.$spliceData
          ? {
              [`root${stringPath(path)}`]: data,
            }
          : {
              action: {
                type: 'set',
                payload: {
                  path: stringPath(path),
                  value: data,
                },
              },
            };
        this.setData(msg, () => {
          if (process.env.NODE_ENV !== 'production') {
            console.log(
              `updateData => 回调时间：${new Date().getTime() - startTime}ms`
            );
          }
        });
      };

      this.spliceData = (
        path: Path,
        start: number,
        deleteCount: number,
        item: any
      ) => {
        const startTime = new Date().getTime();
        const msg = this.$spliceData
          ? {
              [`root${stringPath(path)}`]: [start, deleteCount, item],
            }
          : {
              action: {
                type: 'splice',
                payload: {
                  path: stringPath(path),
                  start,
                  deleteCount,
                  item,
                },
              },
            };
        const method = this.$spliceData ? '$spliceData' : 'setData';
        this[method](msg, () => {
          if (process.env.NODE_ENV !== 'production') {
            console.log(
              `spliceData => 回调时间：${new Date().getTime() - startTime}ms`
            );
          }
        });
      };

      this.appendChild = (child: VNode) => {
        this.root.push(child);
        this.updateData(child.path(), child.toJSON());
      };

      this.removeChild = (child: VNode) => {
        const start = this.root.indexOf(child);
        if (start >= 0 && !this.unloaded) {
          this.root.splice(start, 1);
          this.spliceData(child.path(), start, 1);
        }
      };

      this.insertBefore = (child: VNode, beforeChild: VNode) => {
        const start = this.root.indexOf(beforeChild);
        this.root.splice(start, 0, child);
        this.spliceData(child.path(), start, 0, child);
      };

      const PageWrapper = createPageWrapper(Page, query);

      this.wrapper = render(
        React.createElement(PageWrapper, { page: this }),
        this
      );
    },

    onUnload(this: any) {
      this.unloaded = true;
      if (this.requestUpdate) {
        this.requestUpdate.clear();
      }
      render(null, this);
      this.wrapper = null;
    },

    /**
     * Lifecycle start
     */
    resetLifecyle() {
      this.lifecycleCallback = {};
    },

    registerLifecycle(lifecycle: Lifecycle, callback: () => any) {
      this.lifecycleCallback[lifecycle] =
        this.lifecycleCallback[lifecycle] || [];

      this.lifecycleCallback[lifecycle].push(callback);
    },

    callLifecycle(lifecycle: Lifecycle) {
      const callbacks = this.lifecycleCallback[lifecycle] || [];
      let result;
      callbacks.forEach((callback: any) => {
        result = callback();
      });
      if (result) {
        return result;
      }

      const callback = callbackName(lifecycle);
      if (this.wrapper[callback]) {
        return this.wrapper[callback]();
      }
    },

    onShow() {
      return this.callLifecycle(Lifecycle.show);
    },

    onHide() {
      return this.callLifecycle(Lifecycle.hide);
    },

    onPullDownRefresh() {
      return this.callLifecycle(Lifecycle.pullDownRefresh);
    },

    onReachBottom() {
      return this.callLifecycle(Lifecycle.reachBottom);
    },

    onPageScroll() {
      return this.callLifecycle(Lifecycle.pageScroll);
    },

    onShareAppMessage() {
      return this.callLifecycle(Lifecycle.shareAppMessage);
    },

    onTitleClick() {
      return this.callLifecycle(Lifecycle.titleClick);
    },

    onOptionMenuClick() {
      return this.callLifecycle(Lifecycle.optionMenuClick);
    },

    onPopMenuClick() {
      return this.callLifecycle(Lifecycle.popMenuClick);
    },

    onPullIntercept() {
      return this.callLifecycle(Lifecycle.pullIntercept);
    },

    /**
     * lifecycle end
     */
  };
}
