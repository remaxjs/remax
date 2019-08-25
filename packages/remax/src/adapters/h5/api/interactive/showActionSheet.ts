import { ActionSheet } from 'antd-mobile';
import 'antd-mobile/lib/action-sheet/style';
import * as API from '../../../../api';

export const showActionSheet: typeof API.showActionSheet = params =>
  new Promise(resolve => {
    ActionSheet.showActionSheetWithOptions(
      {
        options: [...params.items, params.cancelButtonText || '取消'],
        cancelButtonIndex: params.items.length - 1,
        destructiveButtonIndex: params.destructiveBtnIndex,
        message: params.title,
        maskClosable: false,
      },
      index => {
        const result = { index };
        if (params.success) {
          params.success(result);
        } else {
          resolve(result);
        }
        if (params.complete) {
          params.complete();
        }
      },
    );
  });
