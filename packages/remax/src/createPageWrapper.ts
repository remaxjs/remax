import * as React from 'react';
import isClassComponent from './utils/isClassComponent';
import { Lifecycle, Callback, callbackName } from './lifecycle';

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
    instance: any = null;

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
        (this as any)[callback] = () => {
          return this.callLifecycle(phase);
        };
      });
    }

    callLifecycle(phase: string) {
      const callback = callbackName(phase);
      if (this.instance && typeof this.instance[callback] === 'function') {
        return this.instance[callback]();
      }
    }

    render() {
      const props: any = {
        location: {
          query: query || {},
        },
      };

      let WrappedPage = Page;
      if (isClassComponent(Page)) {
        props.ref = (node: any) => (this.instance = node);
        Page.prototype.render = () => {};
      } else {
        WrappedPage = (...args) => {
          this.props.page.resetLifecyle();
          return Page(...args);
        };
      }

      return React.createElement(WrappedPage, props);
    }
  };
}
