import createHostComponent from '../../createHostComponent';

import { BaseProps } from '../../types/component';

export interface SliderProps extends BaseProps {
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

export default createHostComponent<SliderProps>('slider');
