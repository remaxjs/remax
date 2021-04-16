import * as React from 'react';
import { createHostComponent } from '@remax/runtime';

import { BaseProps } from '../../types/component';

export interface SliderProps extends BaseProps {
  name?: string;
  activeColor?: string;
  backgroundColor?: string;
  blockColor?: string;
  blockSize?: number;
  color?: string;
  disabled?: boolean;
  max?: number;
  min?: number;
  selectedColor?: string;
  showValue?: boolean;
  step?: number;
  value?: number;
  onChange?: (e: any) => void;
  onChanging?: (e: any) => void;
}

export const Slider: React.ComponentType<SliderProps> = createHostComponent<SliderProps>('slider');

Slider.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
  value: 0,
  color: '#e9e9e9',
  selectedColor: '#1aad19',
  activeColor: '#1aad19',
  backgroundColor: '#e9e9e9',
  blockSize: 28,
  blockColor: '#ffffff',
  showValue: false,
};
