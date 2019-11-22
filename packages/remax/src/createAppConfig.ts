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
    AppComponent: React.ComponentType<any> = DefaultAppComponent
  ) => {
    return {
      _container: new AppContainer(this),

      _pages: [] as any[],

      _instance: React.createRef<any>(),

      onLaunch(options: any) {
        this._render();

        if (this._instance.current && this._instance.current.onLaunch) {
          this._instance.current.onLaunch(options);
        }
      },

      onShow(options: any) {
        if (this._instance && this._instance.current.onShow) {
          this._instance.current.onShow(options);
        }
      },

      onHide() {
        if (this._instance && this._instance.current.onHide) {
          this._instance.current.onHide();
        }
      },

      onError(error: any) {
        if (this._instance && this._instance.current.onError) {
          this._instance.current.onError(error);
        }
      },

      // 支付宝
      onShareAppMessage() {
        if (this._instance && this._instance.current.onShareAppMessage) {
          return this._instance.current.onShareAppMessage();
        }
      },

      // 微信
      onPageNotFound(options: any) {
        if (this._instance && this._instance.current.onPageNotFound) {
          return this._instance.current.onPageNotFound(options);
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
            {
              ref: this._instance,
            },
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
