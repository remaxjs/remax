import * as React from 'react';
import { createPageWrapper, RuntimeOptions, Lifecycle, callbackName } from '@remax/framework-shared';
import stopPullDownRefresh from './stopPullDownRefresh';
import Container from './Container';
import { createPortal } from './ReactPortal';
import render from './render';

let idCounter = 0;

function generatePageId() {
  const id = idCounter;
  const pageId = 'page_' + id;
  idCounter += 1;
  return pageId;
}

// for testing
export function resetPageId() {
  idCounter = 0;
}

export default function createPageConfig(Page: React.ComponentType<any>, name: string) {
  let app: any;
  try {
    app = getApp();
  } catch (e) {
    app = null;
  }

  const config: any = {
    data: {
      root: {
        children: [],
      },
      modalRoot: {
        children: [],
      },
    },

    wrapperRef: React.createRef<any>(),

    lifecycleCallback: {},

    onLoad(this: any, query: any) {
      const PageWrapper = createPageWrapper(Page, name);
      this.pageId = generatePageId();

      this.lifecycleCallback = {};
      this.data = {
        root: {
          children: [],
        },
        modalRoot: {
          children: [],
        },
      };

      this.query = query;
      this.container = new Container(this, 'root');
      this.modalContainer = new Container(this, 'modalRoot');
      const pageElement = React.createElement(PageWrapper, {
        page: this,
        query,
        modalContainer: this.modalContainer,
        ref: this.wrapperRef,
      });

      if (app && app._mount) {
        this.element = createPortal(pageElement, this.container, this.pageId);
        app._mount(this);
      } else {
        this.element = render(pageElement, this.container);
      }

      return this.callLifecycle(Lifecycle.load, query);
    },

    onUnload(this: any) {
      this.callLifecycle(Lifecycle.unload);
      this.unloaded = true;
      this.container.clearUpdate();
      if (app) {
        app._unmount(this);
      }
    },

    onTabItemTap(this: any, e: any) {
      return this.callLifecycle(Lifecycle.tabItemTap, e);
    },

    onResize(this: any, e: any) {
      return this.callLifecycle(Lifecycle.resize, e);
    },

    /**
     * Lifecycle start
     */
    registerLifecycle(lifecycle: Lifecycle, callback: () => any) {
      this.lifecycleCallback[lifecycle] = this.lifecycleCallback[lifecycle] || [];

      this.lifecycleCallback[lifecycle].push(callback);

      return () => {
        this.lifecycleCallback[lifecycle].splice(this.lifecycleCallback[lifecycle].indexOf(callback), 1);
      };
    },

    callLifecycle(lifecycle: Lifecycle, ...args: any[]) {
      const callbacks = this.lifecycleCallback[lifecycle] || [];
      let result;
      // 生命周期中可能改变 state 导致 callbacks 发生变化
      [...callbacks].map((callback: any) => {
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

    events: {
      // 页面返回时触发
      onBack(this: any, e: any) {
        return this.callLifecycle(Lifecycle.back, e);
      },

      // 键盘高度变化时触发
      onKeyboardHeight(this: any, e: any) {
        return this.callLifecycle(Lifecycle.keyboardHeight, e);
      },

      onTabItemTap(this: any, e: any) {
        return this.callLifecycle(Lifecycle.tabItemTap, e);
      },

      // 点击但切换tabItem前触发
      beforeTabItemTap(this: any) {
        return this.callLifecycle(Lifecycle.beforeTabItemTap);
      },

      onResize(this: any, e: any) {
        return this.callLifecycle(Lifecycle.resize, e);
      },
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
      const result = this.callLifecycle(Lifecycle.pullDownRefresh, e);

      if (result && typeof result.then === 'function') {
        Promise.resolve(result).then(() => {
          stopPullDownRefresh();
        });
      }
    },

    onReachBottom() {
      return this.callLifecycle(Lifecycle.reachBottom);
    },

    onTitleClick() {
      return this.callLifecycle(Lifecycle.titleClick);
    },

    onOptionMenuClick(e: any) {
      return this.callLifecycle(Lifecycle.optionMenuClick, e);
    },

    onPopMenuClick(e: any) {
      return this.callLifecycle(Lifecycle.popMenuClick, e);
    },

    onPullIntercept() {
      return this.callLifecycle(Lifecycle.pullIntercept);
    },

    /**
     * lifecycle end
     */
  };

  const lifecycleEvents: any = {
    onPageScroll(e: any) {
      return this.callLifecycle(Lifecycle.pageScroll, e);
    },

    onShareAppMessage(options: any) {
      return this.callLifecycle(Lifecycle.shareAppMessage, options) || {};
    },

    onShareTimeline(options: any) {
      return this.callLifecycle(Lifecycle.shareTimeline, options) || {};
    },
  };

  (RuntimeOptions.get('pageEvents')[name] ?? []).forEach(eventName => {
    if (lifecycleEvents[eventName]) {
      config[eventName] = lifecycleEvents[eventName];
    }
  });

  return RuntimeOptions.get('pluginDriver').onPageConfig({ config, page: name });
}
