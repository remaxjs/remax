import * as React from 'react';
import { RuntimeOptions, ComponentInstanceContext } from '@remax/framework-shared';
import Container from './Container';
import render from './render';

export default function createComponentConfig(Component: React.ComponentType<any>) {
  const config: any = {
    data: {
      action: {},
      root: {
        children: [],
      },
    },

    didMount() {
      if (!this.container) {
        this.init();
      }
    },

    didUpdate(prevProps: any, prevData: any) {
      if (prevData !== this.data) {
        return;
      }

      this.render();
    },

    didUnmount(this: any) {
      this.container.clearUpdate();
      render(null, this.container);
    },

    methods: {
      init(this: any) {
        this.component = RuntimeOptions.get('pluginDriver').onMiniComponent({
          component: Component,
          context: this,
        });
        this.container = new Container(this);
        this.render();
      },

      render(this: any) {
        this.element = render(
          React.createElement(
            ComponentInstanceContext.Provider,
            {
              value: this,
            },
            React.createElement(this.component, this.props)
          ),
          this.container
        );
      },
    },
  };

  return config;
}
