import { usePageEvent } from '../../../../lib/macro';

usePageEvent('onShow', () => {});
usePageEvent('onHide', function onHide() {});
usePageEvent('onUnload', () => {});
