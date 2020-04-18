import createHostComponent from '../../createHostComponent';

export interface CheckboxProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  color?: string;
  onChange?: (e: any) => void;
}

export default createHostComponent<CheckboxProps>('checkbox');
