import * as React from 'react';
import render from './render';
import AppContainer from './AppContainer';
import isClass from './utils/isClass';
import isClassComponent from './utils/isClassComponent';
import { ForwardRef } from './ReactIs';

class DefaultAppComponent extends React.Component {
  render() {
    return React.createElement(React.Fragment, null, this.props.children);
  }
}

enum AppLifecyle {
  onLaunch = 'onLaunch',
  onShow = 'onShow',
  onHide = 'onHide',
  onError = 'onError',
  onShareAppMessage = 'onShareAppMessage',
  onPageNotFound = 'onPageNotFound',
}

export default function createAppConfig(this: any, App: any) {
  const createConfig = (
    AppComponent: React.ComponentType<any> = DefaultAppComponent
  ) => {
    const config = {
      _container: new AppContainer(this),

      _pages: [] as any[],

      _instance: React.createRef<any>(),

      onLaunch(options: any) {
        this._render();

        this.callLifecycle(AppLifecyle.onLaunch, options);
      },

      onShow(options: any) {
        this.callLifecycle(AppLifecyle.onShow, options);
      },

      onHide() {
        this.callLifecycle(AppLifecyle.onHide);
      },

      onError(error: any) {
        this.callLifecycle(AppLifecyle.onError, error);
      },

      // 支付宝
      onShareAppMessage(options: any) {
        this.callLifecycle(AppLifecyle.onShareAppMessage, options);
      },

      // 微信
      onPageNotFound(options: any) {
        this.callLifecycle(AppLifecyle.onPageNotFound, options);
      },

      callLifecycle(lifecycle: AppLifecyle, ...args: any[]) {
        if (this._instance.current && this._instance.current[lifecycle]) {
          return this._instance.current[lifecycle](...args);
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

    return config;
  };

  // 兼容老的写法
  if (isClass(App) && !isClassComponent(App)) {
    // eslint-disable-next-line no-console
    console.warn(
      '使用非 React 组件定义 App 的方式已经废弃，详细请参考：https://remaxjs.org/guide/framework'
    );
    Object.assign(App.prototype, createConfig());
    return new App();
  } else {
    return createConfig(App);
  }
}
