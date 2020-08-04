interface Plugin {
  onAppConfig?: ({ config }: { config: any }) => any;
  onPageConfig?: ({ config, page }: { config: any; page: string }) => any;
  onAppComponent?: ({ component }: { component: React.ComponentType }) => React.ComponentType;
  onPageComponent?: ({ component, page }: { component: React.ComponentType; page: string }) => React.ComponentType;
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

  onPageConfig({ config, page }: { config: any; page: string }) {
    return this.plugins.reduce((acc, plugin) => {
      if (typeof plugin.onPageConfig === 'function') {
        acc = plugin.onPageConfig({ config: acc, page });
      }
      return acc;
    }, config);
  }

  onAppComponent(component: React.ComponentType) {
    return this.plugins.reduce((acc, plugin) => {
      if (typeof plugin.onAppComponent === 'function') {
        acc = plugin.onAppComponent({ component: acc });
      }
      return acc;
    }, component);
  }

  onPageComponent({ component, page }: { component: React.ComponentType; page: string }) {
    return this.plugins.reduce((acc, plugin) => {
      if (typeof plugin.onPageComponent === 'function') {
        acc = plugin.onPageComponent({ component: acc, page });
      }
      return acc;
    }, component);
  }
}
