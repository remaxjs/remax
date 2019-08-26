import factory from './factory';

export interface SwiperItemProps {
  key: string;
}

const SwiperItem = factory<SwiperItemProps>('swiper-item');

export default SwiperItem;
