import * as React from 'react';
import createPageWrapper from './createPageWrapper';
import { Lifecycle, callbackName } from './lifecycle';
import Container from './Container';
import { createPortal } from './ReactPortal';

let idCounter = 0;

export default function createPageConfig(Page: React.ComponentType<any>) {
  const app = getApp() as any;
  const id = idCounter;
  idCounter += 1;

  const config = {
    pageId: 'page_' + id,

    data: {
      action: {},
      root: {
        children: [],
      },
    },

    wrapperRef: React.createRef<any>(),

    lifecycleCallback: {} as any,

    onLoad(this: any, query: any) {
      const PageWrapper = createPageWrapper(Page, query);
      this.query = query;
      this.container = new Container(this);
      this.element = createPortal(
        React.createElement(PageWrapper, {
          page: this,
          ref: this.wrapperRef,
        }),
        this.container,
        this.pageId
      );

      app._mount(this);
    },

    onUnload(this: any) {
      this.unloaded = true;
      this.container.clearUpdate();
      app._unmount(this);
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
      if (this.wrapperRef.current && this.wrapperRef.current[callback]) {
        return this.wrapperRef.current[callback](...args);
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

    onPageScroll(e: any) {
      return this.callLifecycle(Lifecycle.pageScroll, e);
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

  return config;
}
