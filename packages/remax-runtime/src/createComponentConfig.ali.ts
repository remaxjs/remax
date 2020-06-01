import * as React from 'react';
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

    onInit(this: any) {
      this.init();
    },

    didMount() {
      if (!this.container) {
        this.init();
      }
    },

    didUnmount(this: any) {
      this.container.clearUpdate();
      render(null, this.container);
    },

    methods: {
      init(this: any) {
        this.container = new Container(this);
        this.element = render(React.createElement(Component), this.container);
      },
    },
  };

  return config;
}
