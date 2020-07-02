import createHostComponent from '../../createHostComponent';
import TextProps, { defaults } from './props';

export type { TextProps };

const Text = createHostComponent<TextProps>('text', null, defaults);

export default Text;
