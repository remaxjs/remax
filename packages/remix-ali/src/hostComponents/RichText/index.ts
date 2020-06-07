import { createHostComponent } from '@alipay/remix-shared';

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

export const RichText = createHostComponent<RichTextProps>('rich-text');
