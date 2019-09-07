import * as React from 'react';
import createPageWrapper from './createPageWrapper';
import render from './render';
import { Lifecycle, callbackName } from './lifecycle';
import Container from './Container';

export default function createPageConfig(Page: React.ComponentType<any>) {
  return {
    data: {
      action: {},
    },

    wrapper: null as any,

    lifecycleCallback: {} as any,

    onLoad(this: any, query: any) {
      const PageWrapper = createPageWrapper(Page, query);
      this.container = new Container(this);

      this.wrapper = render(
        React.createElement(PageWrapper, { page: this }),
        this.container
      );
    },

    onUnload(this: any) {
      this.unloaded = true;
      if (this.requestUpdate) {
        this.requestUpdate.clear();
      }
      render(null, this.container);
      this.wrapper = null;
    },

    /**
     * Lifecycle start
     */
    registerLifecycle(lifecycle: Lifecycle, callback: () => any) {
      this.lifecycleCallback[lifecycle] =
        this.lifecycleCallback[lifecycle] || [];

      this.lifecycleCallback[lifecycle].push(callback);

      return () => {
        this.lifecycleCallback[lifecycle].splice(
          this.lifecycleCallback[lifecycle].indexOf(callback),
          1
        );
      };
    },

    callLifecycle(lifecycle: Lifecycle, ...args: any[]) {
      const callbacks = this.lifecycleCallback[lifecycle] || [];
      let result;
      callbacks.forEach((callback: any) => {
        result = callback(...args);
      });
      if (result) {
        return result;
      }

      const callback = callbackName(lifecycle);
      if (this.wrapper[callback]) {
        return this.wrapper[callback](...args);
      }
    },

    onShow() {
      return this.callLifecycle(Lifecycle.show);
    },

    onHide() {
      return this.callLifecycle(Lifecycle.hide);
    },

    onReady() {
      return this.callLifecycle(Lifecycle.ready);
    },

    onPullDownRefresh(e: any) {
      return this.callLifecycle(Lifecycle.pullDownRefresh, e);
    },

    onReachBottom() {
      return this.callLifecycle(Lifecycle.reachBottom);
    },

    onPageScroll() {
      return this.callLifecycle(Lifecycle.pageScroll);
    },

    onShareAppMessage(options: any) {
      return this.callLifecycle(Lifecycle.shareAppMessage, options);
    },

    onTitleClick() {
      return this.callLifecycle(Lifecycle.titleClick);
    },

    onOptionMenuClick() {
      return this.callLifecycle(Lifecycle.optionMenuClick);
    },

    onPopMenuClick(e: any) {
      return this.callLifecycle(Lifecycle.popMenuClick, e);
    },

    onPullIntercept() {
      return this.callLifecycle(Lifecycle.pullIntercept);
    },

    events: {
      // 页面返回时触发
      onBack(this: any) {
        return this.callLifecycle(Lifecycle.back);
      },

      // 键盘高度变化时触发
      onKeyboardHeight(this: any, e: any) {
        return this.callLifecycle(Lifecycle.keyboardHeight, e);
      },

      onTabItemTap(this: any, e: any) {
        return this.callLifecycle(Lifecycle.keyboardHeight, e);
      },

      // 点击但切换tabItem前触发
      beforeTabItemTap(this: any) {
        return this.callLifecycle(Lifecycle.beforeTabItemTap);
      },

      onResize(this: any, e: any) {
        return this.callLifecycle(Lifecycle.keyboardHeight, e);
      },
    },

    /**
     * lifecycle end
     */
  };
}
