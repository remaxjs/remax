import * as React from 'react';
import { createHostComponent } from '@remax/runtime';
import { BaseProps, GenericEvent } from '../../types/component';

export interface CheckboxGroupProps extends BaseProps {
  name?: string;
  /**
   * checkbox-group 中选中项发生改变时触发 change 事件，detail = {value:[选中的checkbox的value的数组]} 1.0.0
   */
  onChange?: (event: GenericEvent) => void;
}

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/checkbox-group.html
 */
export const CheckboxGroup: React.ComponentType<CheckboxGroupProps> = createHostComponent<CheckboxGroupProps>(
  'checkbox-group'
);
