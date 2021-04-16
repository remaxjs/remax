import * as React from 'react';
import { createHostComponent } from '@remax/runtime';
import { BaseProps } from '../../types/component';

export interface CheckboxProps extends BaseProps {
  name?: string;
  /** checkbox标识，选中时触发checkbox-group的 change 事件，并携带 checkbox 的 value 1.0.0  */
  value?: string;
  /** 是否禁用 1.0.0  */
  disabled?: boolean;
  /** 当前是否选中，可用来设置默认选中 1.0.0  */
  checked?: boolean;
  /** (default: #09BB07) checkbox的颜色，同css的color 1.0.0  */
  color?: string;
}

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/checkbox.html
 */
export const Checkbox: React.ComponentType<CheckboxProps> = createHostComponent<CheckboxProps>('checkbox');

Checkbox.defaultProps = {
  disabled: false,
  checked: false,
  color: '#09bb07',
};
