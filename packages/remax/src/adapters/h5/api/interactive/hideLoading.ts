import { Toast } from 'antd-mobile';
import * as API from '../../../../api';

export const histLoading: typeof API.hideLoading = () => {
  Toast.hide();
};
