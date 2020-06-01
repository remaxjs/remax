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

    created(this: any) {
      this.container = new Container(this);
      this.element = render(React.createElement(Component), this.container);
    },

    detached(this: any) {
      this.container.clearUpdate();
      render(null, this.container);
    },
  };

  return config;
}
