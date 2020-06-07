import createHostComponent from '../../createHostComponent';
import TextProps from './props';

export type { TextProps };

const Text = createHostComponent<TextProps>('text');

export default Text;
