import factory from './factory';

export interface SwiperItemProps {
  itemId?: string;
}

const SwiperItem = factory<SwiperItemProps>('swiper-item');

export default SwiperItem;
