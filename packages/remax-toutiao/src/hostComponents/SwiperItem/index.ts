import { createHostComponent } from '@remax/shared';

import { BaseProps } from '../../types/component';

export interface SwiperItemProps extends BaseProps {
  itemId?: string;
}

export const SwiperItem = createHostComponent<SwiperItemProps>('swiper-item');
