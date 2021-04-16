import * as React from 'react';
import { createHostComponent } from '@remax/runtime';
import { BaseProps } from '../../types/component';

export interface RadioProps extends BaseProps {
  name?: string;
  /** radio 标识。当该radio 选中时，radio-group 的 change 事件会携带radio的value 1.0.0 */
  value?: string;
  /** (default: false) 当前是否选中 1.0.0 */
  checked?: boolean;
  /** (default: false) 是否禁用 1.0.0 */
  disabled?: boolean;
  /** (default: #09BB07) radio的颜色，同css的color 1.0.0 */
  color?: string;
}
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/radio.html
 */
export const Radio: React.ComponentType<RadioProps> = createHostComponent<RadioProps>('radio');

Radio.defaultProps = {
  checked: false,
  disabled: false,
  color: '#09BB07',
};
