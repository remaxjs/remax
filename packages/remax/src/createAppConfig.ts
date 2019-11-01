import * as React from 'react';
import render from './render';
import AppContainer from './AppContainer';
import isClass from './utils/isClass';
import isClassComponent from './utils/isClassComponent';

class DefaultAppComponent extends React.Component {
  render() {
    return React.createElement(React.Fragment, null, this.props.children);
  }
}

export default function createAppConfig(this: any, App: any) {
  const createConfig = (
    AppComponent: React.ComponentType = DefaultAppComponent
  ) => {
    return {
      _container: new AppContainer(this),

      _pages: [] as any[],

      _instance: null as any,

      onLaunch(options: any) {
        this._instance = this._render();

        if (this._instance && this._instance.onLaunch) {
          this._instance.onLaunch(options);
        }
      },

      onShow(options: any) {
        if (this._instance && this._instance.onShow) {
          this._instance.onShow(options);
        }
      },

      onHide() {
        if (this._instance && this._instance.onHide) {
          this._instance.onHide();
        }
      },

      onError(error: any) {
        if (this._instance && this._instance.onError) {
          this._instance.onError(error);
        }
      },

      // 支付宝
      onShareAppMessage() {
        if (this._instance && this._instance.onShareAppMessage) {
          return this._instance.onShareAppMessage();
        }
      },

      // 微信
      onPageNotFound(options: any) {
        if (this._instance && this._instance.onPageNotFound) {
          return this._instance.onPageNotFound(options);
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
        return render(
          React.createElement(
            AppComponent,
            null,
            this._pages.map(p => p.element)
          ),
          this._container
        );
      },
    };
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
