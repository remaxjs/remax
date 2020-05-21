import { createHostComponent } from '@remax/shared';

import { BaseProps } from '../../types/component';

export interface SliderProps extends BaseProps {
  name?: string;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  value?: number;
  activeColor?: string;
  backgroundColor?: string;
  blockSize?: number;
  blockColor?: string;
  showValue?: boolean;
  onChange?: (e: any) => void;
  onChanging?: (e: any) => void;
}

export const Slider = createHostComponent<SliderProps>('slider');
