import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps } from '../../types/component';

export interface CoverViewProps extends BaseProps {
  scrollTop?: number | string;
}

export const CoverView: React.ComponentType<CoverViewProps> = createHostComponent<CoverViewProps>('cover-view');
