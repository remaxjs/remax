import factory from './factory';

export interface RadioProps {
  id?: string;
  value?: string;
  checked?: boolean;
  disabled?: string;
  color?: string;
}

const Radio = factory<RadioProps>('radio');

export default Radio;
