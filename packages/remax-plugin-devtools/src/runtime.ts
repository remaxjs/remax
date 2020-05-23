import { connectToDevTools } from 'react-devtools-core';
import WebSocket from './WebSocket';

export default {
  onAppConfig({ config }: { config: any }) {
    const originalLaunch = config.onLaunch;
    config.onLaunch = function () {
      try {
        connectToDevTools({
          websocket: new WebSocket('ws://127.0.0.1:8097'),
        });
      } catch (e) {
        // ignore
      }
      originalLaunch.call(config);
    };

    return config;
  },
};
