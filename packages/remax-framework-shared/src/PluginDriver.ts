import type { RuntimePlugin } from '@remax/types';

export default class PluginDriver {
  plugins: RuntimePlugin[];

  constructor(plugins: RuntimePlugin[]) {
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

  onMiniComponent({ component, context }: { component: React.ComponentType; context: any }) {
    return this.plugins.reduce((acc, plugin) => {
      if (typeof plugin.onMiniComponent === 'function') {
        acc = plugin.onMiniComponent({ component: acc, context });
      }
      return acc;
    }, component);
  }

  onCreateHostComponent<P>(
    component: React.ForwardRefExoticComponent<P & React.RefAttributes<any>> | React.ComponentType<P>
  ): any {
    return this.plugins.reduce((acc, plugin) => {
      if (typeof plugin.onCreateHostComponent === 'function') {
        acc = plugin.onCreateHostComponent({ component: acc });
      }
      return acc;
    }, component);
  }

  onCreateHostComponentElement<P>(element: React.ReactElement<P>) {
    return this.plugins.reduce((acc, plugin) => {
      if (typeof plugin.onCreateHostComponentElement === 'function') {
        acc = plugin.onCreateHostComponentElement({ element: acc });
      }
      return acc;
    }, element);
  }
}
