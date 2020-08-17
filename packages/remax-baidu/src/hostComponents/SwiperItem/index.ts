import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps } from '../../types/component';

export interface SwiperItemProps extends BaseProps {
  itemId?: string;
}

export const SwiperItem: React.ComponentType<SwiperItemProps> = createHostComponent<SwiperItemProps>('swiper-view');
