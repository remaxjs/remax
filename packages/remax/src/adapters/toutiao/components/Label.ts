import createHostComponent from '../../../createHostComponent';
import { BaseProps } from './baseTyping';

export interface LabelProps extends BaseProps {
  for?: string;
}

const Label = createHostComponent<LabelProps>('label');

export default Label;
