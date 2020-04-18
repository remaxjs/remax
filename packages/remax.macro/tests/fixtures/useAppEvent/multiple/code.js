import { useAppEvent } from '../../../../lib/macro';

useAppEvent('onShow', () => {});
useAppEvent('onHide', function onHide() {});
useAppEvent('onUnload', () => {});
