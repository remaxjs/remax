import './polyfills/Function';
import * as React from 'react';
import { ForwardRef } from 'react-is';
import render from './render';
import AppContainer from './AppContainer';
import {
  AppInstanceContext,
  RuntimeOptions,
  AppLifecycle,
  callbackName,
  isClassComponent,
} from '@remax/framework-shared';

class DefaultAppComponent extends React.Component {
  render() {
    return React.createElement(React.Fragment, null, this.props.children);
  }
}

export default function createAppConfig(this: any, App: any) {
  const WrappedApp = RuntimeOptions.get('pluginDriver').onAppComponent(App);
  const createConfig = (AppComponent: React.ComponentType<any> = DefaultAppComponent) => {
    const config: any = {
      _container: new AppContainer(),

      _pages: [] as any[],

      _instance: React.createRef<any>(),

      onLaunch(options: any) {
        this._container.context = this;

        this._render();

        return this.callLifecycle(AppLifecycle.launch, options);
      },

      callLifecycle(lifecycle: AppLifecycle, ...args: any[]) {
        const callbacks = AppInstanceContext.lifecycleCallback[lifecycle] || [];
        let result;
        callbacks.forEach((callback: any) => {
          result = callback(...args);
        });
        if (result) {
          return result;
        }

        const callback = callbackName(lifecycle);
        if (this._instance.current && this._instance.current[callback]) {
          return this._instance.current[callback](...args);
        }
      },

      _mount(pageInstance: any) {
        /**
         * 飞书开发者工具的问题，这里的 this 跟 getApp 拿到的不是同一个实例
         */
        if (!this._container.context) {
          this._container.context = this;
        }
        this._pages.push(pageInstance);
        this._render();
      },

      _unmount(pageInstance: any) {
        this._pages.splice(this._pages.indexOf(pageInstance), 1);
        this._render();
      },

      _render() {
        const props: any = {};

        if (isClassComponent(AppComponent) || (AppComponent as any).$$typeof === ForwardRef) {
          props.ref = this._instance;
        }

        return render(
          React.createElement(
            AppComponent,
            props,
            this._pages.map((p: any) => p.element)
          ),
          this._container
        );
      },

      onShow(options: any) {
        return this.callLifecycle(AppLifecycle.show, options);
      },

      onHide() {
        return this.callLifecycle(AppLifecycle.hide);
      },

      onError(error: any) {
        return this.callLifecycle(AppLifecycle.error, error);
      },

      // 微信
      onPageNotFound(options: any) {
        return this.callLifecycle(AppLifecycle.pageNotFound, options);
      },

      // 微信
      onUnhandledRejection(options: any) {
        return this.callLifecycle(AppLifecycle.unhandledRejection, options);
      },

      // 微信
      onThemeChange(options: any) {
        return this.callLifecycle(AppLifecycle.themeChange, options);
      },
    };

    const lifecycleEvent: any = {
      // 阿里
      onShareAppMessage(options: any) {
        return this.callLifecycle(AppLifecycle.shareAppMessage, options);
      },
    };

    (RuntimeOptions.get('appEvents') || []).forEach(eventName => {
      if (lifecycleEvent[eventName]) {
        config[eventName] = lifecycleEvent[eventName];
      }
    });

    return RuntimeOptions.get('pluginDriver').onAppConfig(config);
  };

  return createConfig(WrappedApp);
}
