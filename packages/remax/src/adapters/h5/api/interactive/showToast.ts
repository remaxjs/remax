import { Toast } from 'antd-mobile';
import 'antd-mobile/lib/toast/style';


interface Params {
  title: string;
  icon: 'success' | 'loading' | 'none';
  image: string;
  duration: number;
  mask: boolean;
  success: boolean;
  fail: boolean;
  complete: boolean;
}

export function showToast(params: Params) {
  Toast.info(params.title, params.duration);
}
