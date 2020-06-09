import { useAppEvent } from '@alipay/remix-runtime';
useAppEvent('onShow', () => {});
useAppEvent('onHide', function onHide() {});
useAppEvent('onUnload', () => {});
