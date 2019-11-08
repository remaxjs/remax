import createHostComponent from '../../../createHostComponent';

export interface RadioProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  color?: string;
}

const Radio = createHostComponent<RadioProps>('radio');

export default Radio;
