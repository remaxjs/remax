import * as React from 'react';
import { RuntimeOptions, ComponentInstanceContext } from '@remax/framework-shared';
import Container from './Container';
import render from './render';

export default function createComponentConfig(Component: React.ComponentType<any>) {
  const config: any = {
    options: {
      styleIsolation: 'apply-shared',
    },

    data: {
      action: {},
      root: {
        children: [],
      },
    },

    attached: function () {
      // 在组件实例进入页面节点树时执行
      if (!this.container) {
        this.init();
      }
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
      this.container.clearUpdate();
      render(null, this.container);
    },

    /*
    TODO: 当前微信无对应语法支持监听props
          且必须显示设定 properties，才能在组件中使用 this.properties.name
          所以当前的实现不支持在微信端 props
    eg:
    properties: {
      name: String
    },

    didUpdate(prevProps: any, prevData: any) {
      if (prevData !== this.data) {
        return;
      }

      this.render();
    },*/

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
            React.createElement(this.component, this.properties)
          ),
          this.container
        );
      },
    },
  };

  return config;
}
