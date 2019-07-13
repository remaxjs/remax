import { Modal } from 'antd-mobile';
import 'antd-mobile/lib/modal/style';
import * as API from '../../../../api';

export const confirm: typeof API.confirm = params => {
  return new Promise(resolve => {
    const onPress = (confirm: boolean) => () => {
      const result = { confirm };
      if (params.success) {
        params.success(result);
      } else {
        resolve(result);
      }

      if (params.complete) {
        params.complete();
      }
    };

    Modal.alert(params.title, params.content, [
      {
        text: params.confirmButtonText || '确定',
        onPress: onPress(true),
      },
      {
        text: params.cancelButtonText || '取消',
        onPress: onPress(false),
      },
    ]);
  });
};
