import * as React from 'react';
import { ForwardRef } from 'react-is';
import isClassComponent from './utils/isClassComponent';
import { Lifecycle, Callback, callbackName } from './lifecycle';
import PageInstanceContext from './PageInstanceContext';
import * as RuntimeOptions from './RuntimeOptions';

export interface PageProps<Q = Record<string, string | undefined>> {
  location: {
    query: Q;
  };
}

export default function createPageWrapper(Page: React.ComponentType<any>, name: string) {
  const WrappedPage = RuntimeOptions.get('pluginDriver').onPageComponent({ component: Page, page: name });
  return class PageWrapper extends React.Component<{ page: any; query: any }> {
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

      Object.keys(Lifecycle).forEach(phase => {
        const callback = callbackName(phase);
        (this as any)[callback] = (...args: any[]) => {
          return this.callLifecycle(phase, ...args);
        };
      });
    }

    callLifecycle(phase: string, ...args: any[]) {
      const callback = callbackName(phase);
      if (this.pageComponentInstance && typeof this.pageComponentInstance[callback] === 'function') {
        return this.pageComponentInstance[callback](...args);
      }
    }

    render() {
      const props: any = {
        location: {
          query: this.props.query || {},
        },
      };

      if (isClassComponent(Page) || (Page as any).$$typeof === ForwardRef) {
        props.ref = (node: any) => (this.pageComponentInstance = node);
      }

      return React.createElement(
        PageInstanceContext.Provider,
        { value: this.props.page },
        React.createElement(WrappedPage, props)
      );
    }
  };
}
