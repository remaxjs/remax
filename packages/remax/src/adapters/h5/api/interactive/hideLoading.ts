import { Toast } from 'antd-mobile';
import * as API from '../../types';

export const histLoading: typeof API.hideLoading = () => {
  Toast.hide();
};
