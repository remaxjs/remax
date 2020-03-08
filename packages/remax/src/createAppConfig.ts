import * as React from 'react';
import render from './render';
import AppContainer from './AppContainer';
import isClass from './utils/isClass';
import isClassComponent from './utils/isClassComponent';
import { AppLifecycle, callbackName } from './lifecycle';
import AppInstanceContext from './AppInstanceContext';
import { CONFIG_SCOPE as SCOPE } from './constants';
import { ForwardRef } from './ReactIs';
import isPlainObject from './utils/isPlainObject';

class DefaultAppComponent extends React.Component {
  render() {
    return React.createElement(React.Fragment, null, this.props.children);
  }
}

export default function createAppConfig(
  this: any,
  App: any,
  extraConfig?: any
) {
  extraConfig = extraConfig || {};

  const createConfig = (
    AppComponent: React.ComponentType<any> = DefaultAppComponent
  ) => {
    const scope = {
      _container: new AppContainer(this),

      _pages: [] as any[],

      _instance: React.createRef<any>(),

      callLifecycle(lifecycle: AppLifecycle, ...args: any[]) {
        const callbacks = AppInstanceContext.lifecycleCallback[lifecycle] || [];
        let result;

        const callback = callbackName(lifecycle);

        if (typeof extraConfig[callback] === 'function') {
          return extraConfig[callback](...args);
        }

        callbacks.forEach((callback: any) => {
          result = callback(...args);
        });
        if (result) {
          return result;
        }

        if (this._instance.current && this._instance.current[callback]) {
          return this._instance.current[callback](...args);
        }
      },

      _mount(pageInstance: any) {
        this._pages.push(pageInstance);
        this._render();
      },

      _unmount(pageInstance: any) {
        this._pages.splice(this._pages.indexOf(pageInstance), 1);
        this._render();
      },

      _render() {
        const props: any = {};

        if (
          isClassComponent(AppComponent) ||
          (AppComponent as any).$$typeof === ForwardRef
        ) {
          props.ref = this._instance;
        }
        return render(
          React.createElement(
            AppComponent,
            props,
            this._pages.map(p => p.element)
          ),
          this._container
        );
      },
    };

    const config = {
      [SCOPE]: scope,

      ...extraConfig,

      onLaunch(options: any) {
        this[SCOPE]._render();

        this[SCOPE].callLifecycle(AppLifecycle.launch, options);
      },

      onShow(options: any) {
        this[SCOPE].callLifecycle(AppLifecycle.show, options);
      },

      onHide() {
        this[SCOPE].callLifecycle(AppLifecycle.hide);
      },

      onError(error: any) {
        this[SCOPE].callLifecycle(AppLifecycle.error, error);
      },

      // 支付宝
      onShareAppMessage(options: any) {
        this[SCOPE].callLifecycle(AppLifecycle.shareAppMessage, options);
      },

      // 微信
      onPageNotFound(options: any) {
        this[SCOPE].callLifecycle(AppLifecycle.pageNotFound, options);
      },
    };

    return config;
  };

  if (isPlainObject(App)) {
    class NativeApp {
      constructor() {
        Object.assign(this, { ...App });
      }
    }

    Object.assign(NativeApp.prototype, createConfig());

    return new NativeApp();
  }

  // 兼容老的写法和原生写法
  if (isClass(App) && !isClassComponent(App)) {
    // eslint-disable-next-line no-console
    console.warn(
      '使用非 React 组件定义 App 的方式已经废弃，详细请参考：https://remaxjs.org/guide/framework。'
    );
    Object.assign(App.prototype, createConfig());
    return new App();
  }

  return createConfig(App);
}
