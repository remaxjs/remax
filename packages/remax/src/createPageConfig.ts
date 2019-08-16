import * as React from 'react';
import createPageWrapper from './createPageWrapper';
import render from './render';
import { REMAX_ROOT_BACKUP, REMAX_ROOT } from './constants';
import pure from './utils/pure';
import debounce from './utils/debounce';
import { Lifecycle, callbackName } from './lifecycle';

export default function createPageConfig(Page: React.ComponentType<any>) {
  return {
    data: {
      $$REMAX_ROOT: [],
    },

    wrapper: null as any,

    lifecycleCallback: {} as any,

    onLoad(this: any, query: any) {
      const executeUpdate = () => {
        const data = pure(this[REMAX_ROOT_BACKUP]);

        const startTime = new Date().getTime();

        this.setData(
          {
            [REMAX_ROOT]: data,
          },
          () => {
            if (process.env.NODE_ENV !== 'production') {
              console.log(
                `setData => 回调时间：${new Date().getTime() - startTime}ms`
              );
            }
          }
        );
      };

      // 直接执行 setData，用于第一次 render 等需要立即更新的场景
      this.executeUpdate = executeUpdate;

      // 合并 setData, 延迟执行提升效率
      this.requestUpdate = debounce(() => {
        executeUpdate();
      }, 1000 / 60);

      const PageWrapper = createPageWrapper(Page, query);

      this.wrapper = render(
        React.createElement(PageWrapper, { page: this }),
        this
      );
    },

    onUnload(this: any) {
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
