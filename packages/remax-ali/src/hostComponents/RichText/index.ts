import * as React from 'react';
import { createHostComponent } from '@remax/shared';

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

export const RichText: React.ComponentType<RichTextProps> = createHostComponent<RichTextProps>('rich-text');
