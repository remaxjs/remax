interface Plugin {
  onAppConfig?: ({ config }: { config: any }) => any;
  onPageConfig?: ({ config }: { config: any }) => any;
}

export default class PluginDriver {
  plugins: Plugin[];

  constructor(plugins: Plugin[]) {
    this.plugins = plugins;
  }

  onAppConfig(config: any) {
    return this.plugins.reduce((acc, plugin) => {
      if (typeof plugin.onAppConfig === 'function') {
        acc = plugin.onAppConfig({ config: acc });
      }
      return acc;
    }, config);
  }

  onPageConfig(config: any) {
    return this.plugins.reduce((acc, plugin) => {
      if (typeof plugin.onPageConfig === 'function') {
        acc = plugin.onPageConfig({ config: acc });
      }
      return acc;
    }, config);
  }
}
