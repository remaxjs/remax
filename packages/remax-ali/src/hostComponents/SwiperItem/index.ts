import createHostComponent from '../../createHostComponent';

export interface SwiperItemProps {
  readonly dataset?: DOMStringMap;
  key: string;
}

export default createHostComponent<SwiperItemProps>('swiper-item');
