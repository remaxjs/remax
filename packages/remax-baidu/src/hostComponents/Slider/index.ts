import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps, GenericEvent } from '../../types/component';

export const Slider: React.ComponentType<SliderProps> = createHostComponent<SliderProps>('slider');

Slider.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
  value: 0,
  backgroundColor: '#cccccc',
  blockSize: 24,
  blockColor: '#ffffff',
  activeColor: '#3c76ff',
  showValue: false,
};

export interface SliderProps extends BaseProps {
  /** 最小值 */
  min?: number;
  /** 最大值 */
  max?: number;
  /** 步长，取值必须大于 0，并且可被 (max - min) 整除  */
  step?: number;
  /** 是否禁用  */
  disabled?: boolean;
  /** 当前取值  */
  value?: number;
  /** 背景条的颜色  */
  backgroundColor?: string;
  /** 滑块的大小，取值范围为 12 - 28  */
  blockSize?: number;
  /** 滑块的颜色 */
  blockColor?: string;
  /** 已选择的颜色  */
  activeColor?: string;
  /** 是否显示当前 value */
  showValue?: boolean;
  onChange?: (event: GenericEvent) => any;
  onChanging?: (event: GenericEvent) => any;
}
