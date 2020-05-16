import { createHostComponent } from '@remax/shared';

export interface SliderProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  name?: string;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  value?: number;
  showValue?: boolean;
  activeColor?: string;
  backgroundColor?: string;
  trackSize?: number;
  handleSize?: number;
  handleColor?: string;
  onChange?: (e: any) => void;
  onChanging?: (e: any) => void;
}

export const Slider = createHostComponent<SliderProps>('slider');
