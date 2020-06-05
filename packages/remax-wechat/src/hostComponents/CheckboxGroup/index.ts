import { createHostComponent } from '@remax/shared';
import { BaseProps } from '../../types/component';

export interface CheckboxGroupProps extends BaseProps {
  name?: string;
  /**
   * checkbox-group 中选中项发生改变时触发 change 事件，detail = {value:[选中的checkbox的value的数组]} 1.0.0
   */
  onChange?: (event: any) => void;
}

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/checkbox-group.html
 */
export const CheckboxGroup = createHostComponent<CheckboxGroupProps>('checkbox-group');
