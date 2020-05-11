import createHostComponent from '../../createHostComponent';
import { BaseProps } from '../../types/component';

export interface CheckboxGroupProps extends BaseProps {
  /** 组件名字，用于表单提交获取数据 */
  name?: string;
  /** checkbox标识，选中时触发checkbox-group的 change 事件，并携带 checkbox 的 value 1.0.0  */
  value?: string;
  /** (default: false) 是否禁用 1.0.0  */
  disabled?: boolean;
  /** (default: false) 当前是否选中，可用来设置默认选中 1.0.0  */
  checked?: boolean;
  /** (default: #09BB07) checkbox的颜色，同css的color 1.0.0  */
  color?: string;
  /**
   * checkbox-group 中选中项发生改变时触发 change 事件，detail = {value:[选中的checkbox的value的数组]} 1.0.0
   */
  onChange?: (event: any) => void;
}

export default createHostComponent<CheckboxGroupProps>('checkbox-group');
