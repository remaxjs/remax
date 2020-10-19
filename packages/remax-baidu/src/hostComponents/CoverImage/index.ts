import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps, GenericEvent } from '../../types/component';

export interface CoverImageProps extends BaseProps {
  src?: string;
  onLoad?: (event: GenericEvent) => any;
  onError?: (event: GenericEvent) => any;
}

export const CoverImage: React.ComponentType<CoverImageProps> = createHostComponent<CoverImageProps>('cover-image');
