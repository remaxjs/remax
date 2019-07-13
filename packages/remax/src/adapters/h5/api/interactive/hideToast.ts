import { Toast } from 'antd-mobile';
import * as API from '../../../../api';

export const hideToast: typeof API.hideToast = params => {
  return new Promise(resolve => {
    Toast.hide();
    if (params.success) {
      params.success();
    } else {
      resolve();
    }
    if (params.complete) {
      params.complete();
    }
  });
};
