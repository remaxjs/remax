import * as React from 'react';
import render from './render';
import * as RuntimeOptions from './RuntimeOptions';
import createComponentWrapper from './createComponentWrapper';
import { Lifecycle, callbackName } from './lifecycle';
import Container from './Container';

let idCounter = 0;

function generatePageId() {
  const id = idCounter;
  const pageId = 'component_' + id;
  idCounter += 1;
  return pageId;
}

// for testing
export function resetPageId() {
  idCounter = 0;
}

export default function createPageConfig(Page: React.ComponentType<any>, name: string) {
  const config: any = {
    data: {
      root: {},
      modalRoot: {
        children: [],
      },
    },
    properties: {
      // 仅解析data
      data: {
        type: Object,
        value: {},
        observer: function (newVal: any, oldVal: any) {
          if (Object.keys(oldVal).length) {
            // 解决component中 react顶层组件 props不更新问题
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            this.instance && this.instance.updateData(newVal || {});
          }
        },
      },
    },
    lifetimes: {
      attached: function (this: any) {
        this.wrapperRef = React.createRef<any>();
        this.lifecycleCallback = {};
        const query = {};
        const PageWrapper = createComponentWrapper(Page, name);
        this.pageId = generatePageId();

        this.query = query;

        this.container = new Container(this, 'root');
        this.modalContainer = new Container(this, 'modalRoot');

        this.element = React.createElement(PageWrapper, {
          page: this,
          data: this.data.data || {},
          modalContainer: this.modalContainer,
          ref: this.wrapperRef,
          getInstance: (node: any) => (this.instance = node),
        });
        render(this.element, this.container);

        this.callLifecycle(Lifecycle.load, query);
      },
      moved: () => {},
      detached: function (this: any) {
        this.callLifecycle(Lifecycle.unload);
        this.unloaded = true;
        this.container.clearUpdate();
      },
    },
    methods: {
      /**
       * Lifecycle start
       */
      registerLifecycle(this: any, lifecycle: Lifecycle, callback: () => any) {
        this.lifecycleCallback[lifecycle] = this.lifecycleCallback[lifecycle] || [];

        this.lifecycleCallback[lifecycle].push(callback);

        return () => {
          this.lifecycleCallback[lifecycle].splice(this.lifecycleCallback[lifecycle].indexOf(callback), 1);
        };
      },

      callLifecycle(this: any, lifecycle: Lifecycle, ...args: any[]) {
        console.log(lifecycle, ...args);
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
    },
  };

  const pageObj = RuntimeOptions.get('pluginDriver').onPageConfig({ config, page: name });

  return pageObj;
}
