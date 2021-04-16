import * as React from 'react';
import { ForwardRef } from 'react-is';
import { AppInstanceContext, AppLifecycle, callbackName, isClassComponent } from '@remax/framework-shared';

class DefaultAppComponent extends React.Component {
  render() {
    return React.createElement(React.Fragment, null, this.props.children);
  }
}

export default function createAppConfig(this: any, App: any) {
  const createConfig = (AppComponent: React.ComponentType<any> = DefaultAppComponent) => {
    const config = {
      _instance: React.createRef<any>(),

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
    };

    return class AppConfig extends React.Component<any> {
      componentDidMount() {
        window.onerror = (...params: any[]) => {
          config.callLifecycle(AppLifecycle.error, ...params);
        };
        config.callLifecycle(AppLifecycle.launch);
        this.handelVisibilityChange();
      }

      componentWillUnmount() {
        document.removeEventListener('visibilitychange', this.visibilityChangeEvent);
      }

      visibilityChangeEvent = () => {
        if (document.visibilityState === 'visible') {
          config.callLifecycle(AppLifecycle.show);
        } else {
          config.callLifecycle(AppLifecycle.hide);
        }
      };

      handelVisibilityChange = () => {
        document.addEventListener('visibilitychange', this.visibilityChangeEvent);
      };

      render() {
        let ref;

        if (isClassComponent(AppComponent) || (AppComponent as any).$$typeof === ForwardRef) {
          ref = config._instance;
        }

        return <AppComponent {...this.props} ref={ref} />;
      }
    };
  };

  return createConfig(App);
}
