import createHostComponent from '../../createHostComponent';
import { BaseProps } from '../../types/component';

export interface SwitchProps extends BaseProps {
  /** (default: false) 是否选中 1.0.0 */
  checked?: boolean;
  /** (default: false) 是否禁用 1.0.0 */
  disabled?: boolean;
  /** switch 样式，有效值：switch, checkbox 1.0.0 */
  type?: 'switch' | 'checkbox';
  /** #04BE02 switch 的颜色，同 css 的 color 1.0.0 */
  color?: string;
  /** checked 改变时触发 change 事件，event.detail={ value} 1.0.0 */
  onChange?: (event: any) => any;
}

export default createHostComponent<SwitchProps>('switch');
