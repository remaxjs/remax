import * as React from 'react';
import isClassComponent from './utils/isClassComponent';
import { Lifecycle, Callback, callbackName } from './lifecycle';
import PageInstanceContext from './PageInstanceContext';
import { ForwardRef } from './ReactIs';

export interface PageProps<Q = {}> {
  location: {
    query: Q;
  };
}

export default function createPageWrapper(
  Page: React.ComponentType,
  query: object
) {
  return class PageWrapper extends React.Component<{ page: any }> {
    // 小程序 Page 实例
    pageInstance: any = null;
    // 页面组件的实例
    pageComponentInstance: any = null;

    callbacks = new Map<
      string,
      {
        callbacks: Callback[];
      }
    >();

    constructor(props: any) {
      super(props);

      this.bindPageInstance();

      Object.keys(Lifecycle).forEach(phase => {
        const callback = callbackName(phase);
        (this as any)[callback] = (...args: any[]) => {
          return this.callLifecycle(phase, ...args);
        };
      });
    }

    // 绑定小程序的 Page 实例
    bindPageInstance() {
      const pages = getCurrentPages();
      this.pageInstance = pages[pages.length - 1];
    }

    callLifecycle(phase: string, ...args: any[]) {
      const callback = callbackName(phase);
      if (
        this.pageComponentInstance &&
        typeof this.pageComponentInstance[callback] === 'function'
      ) {
        return this.pageComponentInstance[callback](...args);
      }
    }

    render() {
      const props: any = {
        location: {
          query: query || {},
        },
      };

      if (isClassComponent(Page) || (Page as any).$$typeof === ForwardRef) {
        props.ref = (node: any) => (this.pageComponentInstance = node);
      }

      return React.createElement(
        PageInstanceContext.Provider,
        { value: this.pageInstance },
        React.createElement(Page, props)
      );
    }
  };
}
