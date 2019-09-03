import factory from './factory';
import { CSSProperties } from 'react';

const Slider = factory<SliderProps>('slider');

export interface SliderProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  min?: number; // 0 否 最小值 1.0.0
  max?: number; // 100 否 最大值 1.0.0
  step?: number; // 1 否 步长，取值必须大于 0，并且可被(max - min)整除 1.0.0
  disabled?: boolean; // false 否 是否禁用 1.0.0
  value?: number; // 0 否 当前取值 1.0.0
  activeColor?: string; // #1aad19 否 已选择的颜色 1.0.0
  backgroundColor?: string; // #e9e9e9 否 背景条的颜色 1.0.0
  blockSize?: number; // 28 否 滑块的大小，取值范围为 12 - 28 1.9.0
  blockColor?: string; // #ffffff 否 滑块的颜色 1.9.0
  showValue?: boolean; // false 否 是否显示当前 value 1.0.0
  onChange?: (event: any) => any; //  否 完成一次拖动后触发的事件，event.detail = {value} 1.0.0
  onChanging?: (event: any) => any; //  否 拖动过程中触发的事件，event.detail = {value} 1.7.0
  onClick?: (event: any) => any;
  animation?: Record<string, any>[];
}

export default Slider;
