import * as React from 'react';
import createHostComponent from '../../createHostComponent';
import { BaseProps } from '../../types/component';

const Slider: React.ComponentType<SliderProps> = createHostComponent<
  SliderProps
>('slider');

export interface SliderProps extends BaseProps {
  /** (default: 0) 最小值 1.0.0 */
  min?: number;
  /** (default: 100) 最大值 1.0.0 */
  max?: number;
  /** (default: 1) 步长，取值必须大于 0，并且可被(max - min)整除 1.0.0 */
  step?: number;
  /** (default: false) 是否禁用 1.0.0 */
  disabled?: boolean;
  /** (default: 0) 当前取值 1.0.0 */
  value?: number;
  /** (default: #1aad19) 已选择的颜色 1.0.0 */
  activeColor?: string;
  /** (default: #e9e9e9) 背景条的颜色 1.0.0 */
  backgroundColor?: string;
  /** (default: 28) 滑块的大小，取值范围为 12 - 28 1.9.0 */
  blockSize?: number;
  /** (default: #ffffff) 滑块的颜色 1.9.0 */
  blockColor?: string;
  /** (default: false) 是否显示当前 value 1.0.0 */
  showValue?: boolean;
  /** 完成一次拖动后触发的事件，event.detail = {value} 1.0.0 */
  onChange?: (event: any) => any;
  /** 拖动过程中触发的事件，event.detail = {value} 1.7.0 */
  onChanging?: (event: any) => any;
}

Slider.defaultProps = {
  blockSize: 28,
  step: 1,
  max: 100,
};

export default Slider;
