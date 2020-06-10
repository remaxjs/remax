import { usePageEvent } from '@alipay/remix-runtime';
usePageEvent('onShow', () => {});
usePageEvent('onHide', function onHide() {});
usePageEvent('onUnload', () => {});
