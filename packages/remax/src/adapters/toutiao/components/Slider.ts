import factory from './factory';

export interface SliderProps {
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

const Slider = factory<SliderProps>('slider');

export default Slider;
