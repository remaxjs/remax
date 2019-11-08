import createHostComponent from '../../../createHostComponent';

export interface RichTextNode {
  readonly dataset?: DOMStringMap;
  type?: string;
  name: string;
  attrs?: any;
  children?: RichTextNode;
}

export interface RichTextProps {
  nodes?: RichTextNode[];
}
const RichText = createHostComponent<RichTextProps>('rich-text');

export default RichText;
