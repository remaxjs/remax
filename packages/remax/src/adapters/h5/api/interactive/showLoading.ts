import { Toast } from 'antd-mobile';
import 'antd-mobile/lib/toast/style';
import * as API from '../../types';

export const showLoading: typeof API.showLoading = params => {
  return new Promise(resolve => {
    Toast.loading(params.content, 3, () => {
      if (params.success) {
        params.success();
      } else {
        resolve();
      }
      if (params.complete) {
        params.complete();
      }
    });
  });
};
