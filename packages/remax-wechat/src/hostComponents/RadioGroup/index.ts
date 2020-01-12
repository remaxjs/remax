import createHostComponent from '../../createHostComponent';
import { BaseProps } from '../../types/component';

export interface RadioGroupProps extends BaseProps {
  /** checkbox-group中选中项发生改变时触发 change 事件，detail = {value:[选中的checkbox的value的数组]} 1.0.0 */
  onChange?: (event: any) => any;
}

export default createHostComponent<RadioGroupProps>('radio-group');
