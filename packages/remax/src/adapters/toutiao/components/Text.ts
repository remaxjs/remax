import createHostComponent from '../../../createHostComponent';
import { BaseProps } from '../types/component';

export interface TextProps extends BaseProps {
  selectable?: boolean;
  space?: string | boolean;
  decode?: boolean;
}

const Text = createHostComponent<TextProps>('text');

export default Text;
