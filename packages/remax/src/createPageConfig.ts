import * as React from 'react';
import createPageWrapper from './createPageWrapper';
import render from './render';
import { Lifecycle, callbackName } from './lifecycle';
import VNode from './VNode';

export default function createPageConfig(Page: React.ComponentType<any>) {
  return {
    data: {
      root: [],
    },

    root: [],

    wrapper: null as any,

    lifecycleCallback: {} as any,

    onLoad(this: any, query: any) {
      this.updateData = (path: string, data: any) => {
        const startTime = new Date().getTime();
        this.setData(
          {
            [`root${path}`]: data,
          },
          () => {
            if (process.env.NODE_ENV !== 'production') {
              console.log(
                `updateData => 回调时间：${new Date().getTime() - startTime}ms`
              );
            }
          }
        );
      };

      this.spliceData = (
        path: string,
        start: number,
        deleteCount: number,
        ...items: any[]
      ) => {
        const startTime = new Date().getTime();
        this.$spliceData(
          {
            [`root${path}`]: [start, deleteCount, ...items],
          },
          () => {
            if (process.env.NODE_ENV !== 'production') {
              console.log(
                `spliceData => 回调时间：${new Date().getTime() - startTime}ms`
              );
            }
          }
        );
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
