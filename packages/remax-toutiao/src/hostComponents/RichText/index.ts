import * as React from 'react';
import { createHostComponent } from '@remax/runtime';

import { BaseProps } from '../../types/component';

interface Node {
  name: string;
  attrs?: any;
  children?: Node[];
}

export interface RichTextProps extends BaseProps {
  nodes?: Node | string;
}

export const RichText: React.ComponentType<RichTextProps> = createHostComponent<RichTextProps>('rich-text');
