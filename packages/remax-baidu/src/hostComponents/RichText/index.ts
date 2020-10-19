import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps } from '../../types/component';

export interface RichTextProps extends BaseProps {
  nodes?: string | any[];
  selectable?: boolean;
  name?: string;
  attrs?: Record<string, unknown>;
  children?: any[];
  text?: string;
  imageMenuPrevent?: boolean;
  preview?: boolean;
}

export const RichText: React.ComponentType<RichTextProps> = createHostComponent<RichTextProps>('rich-text');

RichText.defaultProps = {
  selectable: false,
};
