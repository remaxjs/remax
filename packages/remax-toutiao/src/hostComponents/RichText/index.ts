import { createHostComponent } from '@remax/shared';

import { BaseProps } from '../../types/component';

interface Node {
  name: string;
  attrs?: any;
  children?: Node[];
}

export interface RichTextProps extends BaseProps {
  nodes?: Node | string;
}

export const RichText = createHostComponent<RichTextProps>('rich-text');
