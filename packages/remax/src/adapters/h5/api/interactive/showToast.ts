import { Toast } from 'antd-mobile';
import 'antd-mobile/lib/toast/style';
import * as API from '../../../../api';

export const showToast: typeof API.showToast = params => {
  return new Promise(resolve => {
    const typeMap = {
      success: 'success',
      fail: 'fail',
      exception: 'offline',
      none: 'info',
    };
    const method = params.type ? typeMap[params.type] || 'info' : 'info';
    (Toast as any)[method](params.content, (params.duration || 3000) / 1000, () => {
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
