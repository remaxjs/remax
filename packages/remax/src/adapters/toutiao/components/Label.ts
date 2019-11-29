import createHostComponent from '../../../createHostComponent';
import { BaseProps } from '../types/component';

export interface LabelProps extends BaseProps {
  for?: string;
}

const Label = createHostComponent<LabelProps>('label');

export default Label;
