import * as React from 'react';
import isClassComponent from './utils/isClassComponent';
import { Lifecycle, Callback, callbackName } from './lifecycle';
import { ForwardRef } from './ReactIs';
import Container from './Container';
import * as RuntimeOptions from './RuntimeOptions';

export default function createPageWrapper(Page: React.ComponentType<any>, name: string) {
  const WrappedPage = RuntimeOptions.get('pluginDriver').onPageComponent({ component: Page, page: name });

  return class PageWrapper extends React.Component<{ page: any; data: any; modalContainer: Container }, any> {
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
      props.getInstance(this);
      Object.keys(Lifecycle).forEach(phase => {
        const callback = callbackName(phase);
        (this as any)[callback] = (...args: any[]) => {
          return this.callLifecycle(phase, ...args);
        };
      });
      this.state = {
        data: null,
      };
    }

    // 更新data
    updateData(data: any) {
      this.setState({ data });
    }

    callLifecycle(phase: string, ...args: any[]) {
      const callback = callbackName(phase);
      if (this.pageComponentInstance && typeof this.pageComponentInstance[callback] === 'function') {
        return this.pageComponentInstance[callback](...args);
      }
    }

    render() {
      const { data } = this.state;
      // 实例化时使用props传入的值 外层传入值更新时使用state中data
      // 为了解决外层容器传入数据变化不更新问题
      const props: any = { data: data || this.props.data };

      if (isClassComponent(Page) || (Page as any).$$typeof === ForwardRef) {
        props.ref = (node: any) => (this.pageComponentInstance = node);
      }

      return React.createElement(WrappedPage, props);
    }
  };
}
