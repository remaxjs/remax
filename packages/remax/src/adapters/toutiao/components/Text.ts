import factory from './factory';

export interface TextProps {
  selectable?: boolean;
  space?: string | boolean;
  decode?: boolean;
}

const Text = factory<TextProps>('text');

export default Text;
