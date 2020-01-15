import createHostComponent from '../../createHostComponent';
import { InputEvent } from '../../types';

export interface CheckboxGroupProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  name?: string;
  onChange?: (e: InputEvent) => void;
}

export default createHostComponent<CheckboxGroupProps>('checkbox-group');
