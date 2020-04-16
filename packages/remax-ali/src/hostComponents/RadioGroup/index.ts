import createHostComponent from '../../createHostComponent';

export interface RadioGroupProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  name?: string;
  onChange?: (e: any) => void;
}

export default createHostComponent<RadioGroupProps>('radio-group');
