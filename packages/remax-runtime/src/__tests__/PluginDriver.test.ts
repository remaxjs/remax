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
        onPageConfig({ config }) {
          config.bar = 1;
          return config;
        },
      },
    ]);

    expect(pluginDriver.onPageConfig({})).toEqual({ foo: 1, bar: 1 });
  });
});
