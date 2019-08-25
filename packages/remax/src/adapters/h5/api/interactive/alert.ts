import { Modal } from 'antd-mobile';
import 'antd-mobile/lib/modal/style';
import * as API from '../../../../api';

export const alert: typeof API.alert = params =>
  new Promise(resolve => {
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
