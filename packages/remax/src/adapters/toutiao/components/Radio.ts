import factory from './factory';

export interface RadioProps {
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  color?: string;
}

const Radio = factory<RadioProps>('radio');

export default Radio;
