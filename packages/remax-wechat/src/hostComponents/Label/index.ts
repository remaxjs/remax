import { createHostComponent } from '@remax/shared';
import { BaseProps } from '../../types/component';

export interface LabelProps extends BaseProps {
  /** 绑定控件的 id 1.0.0 */
  for?: string;
}

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/label.html
 */
export const Label = createHostComponent<LabelProps>('label');
