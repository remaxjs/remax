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
    resetLifecyle() {
      this.lifecycleCallback = {};
    },

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
