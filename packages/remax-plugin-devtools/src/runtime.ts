import { connectToDevTools } from '@remax/react-devtools-core';
import WebSocket from './WebSocket';

export default {
  onAppConfig({ config }: { config: any }) {
    const originalLaunch = config.onLaunch;
    config.onLaunch = function (...args: any) {
      try {
        console.log('尝试连接 React DevTools，请忽略连接错误信息，详情请参考 https://remaxjs.org/guide/basic/devtools');
        connectToDevTools({
          websocket: new WebSocket('ws://127.0.0.1:8097'),
        });
      } catch (e) {
        // ignore
      }
      originalLaunch.apply(config, args);
    };

    return config;
  },
};
