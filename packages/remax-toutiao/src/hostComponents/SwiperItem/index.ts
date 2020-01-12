import createHostComponent from '../../createHostComponent';

import { BaseProps } from '../../types/component';

export interface SwiperItemProps extends BaseProps {
  itemId?: string;
}

export default createHostComponent<SwiperItemProps>('swiper-item');
