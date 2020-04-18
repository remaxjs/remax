import createHostComponent from '../../createHostComponent';

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

export default createHostComponent<RichTextProps>('rich-text');
