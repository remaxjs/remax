import { Modal } from 'antd-mobile';
import 'antd-mobile/lib/modal/style';
import * as API from '../../types';

export const alert: typeof API.alert = params => {
  return new Promise(resolve => {
    Modal.alert(params.title, params.content, [
      {
        text: params.buttonText || '确定',
        onPress: () => {
          if (params.success) {
            params.success();
          }
          if (params.complete) {
            params.complete();
          }
          resolve();
        },
      },
    ]);
  });
};
