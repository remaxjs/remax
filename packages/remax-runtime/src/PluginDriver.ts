interface Plugin {
  onAppConfig?: (config: any) => any;
  onPageConfig?: (config: any) => any;
}

export default class PluginDriver {
  plugins: Plugin[];

  constructor(plugins: Plugin[]) {
    this.plugins = plugins;
  }

  onAppConfig(config: any) {
    return this.plugins.reduce((acc, plugin) => {
      if (typeof plugin.onAppConfig === 'function') {
        acc = plugin.onAppConfig(config);
      }
      return acc;
    }, config);
  }

  onPageConfig(config: any) {
    return this.plugins.reduce((acc, plugin) => {
      if (typeof plugin.onPageConfig === 'function') {
        acc = plugin.onPageConfig(config);
      }
      return acc;
    }, config);
  }
}
