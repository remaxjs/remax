import * as React from 'react';
import PluginDriver from '../PluginDriver';

describe('PluginDriver', () => {
  it('onAppConfig', () => {
    const pluginDriver = new PluginDriver([
      {
        onAppConfig({ config }) {
          config.foo = 1;
          return config;
        },
      },
      {
        onAppConfig({ config }) {
          config.bar = 1;
          return config;
        },
      },
    ]);

    expect(pluginDriver.onAppConfig({})).toEqual({ foo: 1, bar: 1 });
  });

  it('onPageConfig', () => {
    const pluginDriver = new PluginDriver([
      {
        onPageConfig({ config }) {
          config.foo = 1;
          return config;
        },
      },
      {
        onPageConfig({ config, page }) {
          config.page = page;
          return config;
        },
      },
    ]);

    expect(pluginDriver.onPageConfig({ config: {}, page: 'pages/foo' })).toEqual({ foo: 1, page: 'pages/foo' });
  });

  it('onAppComponent', () => {
    const App: React.FC = props => props.children as React.ReactElement;
    const wrap = (component: React.ComponentType) => {
      const Wrapped = () => React.createElement(component);
      Wrapped.displayName = 'Wrapped';
      return Wrapped;
    };
    const pluginDriver = new PluginDriver([
      {
        onAppComponent({ component }) {
          return wrap(component);
        },
      },
    ]);
    expect(pluginDriver.onAppComponent(App).displayName).toEqual('Wrapped');
  });

  it('onPageComponent', () => {
    const Page = () => React.createElement('view');
    const wrap = (component: React.ComponentType, page: string) => {
      const Wrapped = () => React.createElement(component);
      Wrapped.displayName = page;
      return Wrapped;
    };
    const pluginDriver = new PluginDriver([
      {
        onPageComponent({ component, page }) {
          return wrap(component, page);
        },
      },
    ]);
    expect(pluginDriver.onPageComponent({ component: Page, page: 'pages/foo/index' }).displayName).toEqual(
      'pages/foo/index'
    );
  });

  it('onCreateHostComponent', () => {
    const View = () => React.createElement('view');
    const wrap = (component: React.ComponentType) => {
      const Wrapped = () => React.createElement(component);
      Wrapped.displayName = 'Wrapped';
      return Wrapped;
    };
    const pluginDriver = new PluginDriver([
      {
        onCreateHostComponent({ component }) {
          return wrap(component as React.ComponentType);
        },
      },
    ]);
    expect(pluginDriver.onCreateHostComponent(View).displayName).toEqual('Wrapped');
  });
});
