import factory from './factory';

export interface NodeProps {
  type?: string;
  name: string;
  attrs?: any;
  children?: RichTextProps;
}

export interface RichTextProps {
  nodes?: NodeProps[];
}
const RichText = factory<RichTextProps>('rich-text');

export default RichText;
