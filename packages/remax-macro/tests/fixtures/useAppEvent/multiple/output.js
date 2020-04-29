import { useAppEvent } from '@remax/runtime';
useAppEvent('onShow', () => {});
useAppEvent('onHide', function onHide() {});
useAppEvent('onUnload', () => {});
