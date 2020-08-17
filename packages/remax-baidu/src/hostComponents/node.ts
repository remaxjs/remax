import * as Button from './Button/node';
import * as View from './View/node';
import * as ScrollView from './ScrollView/node';
import * as Swiper from './Swiper/node';
import * as SwiperItem from './SwiperItem/node';

const hostComponents = new Map();

hostComponents.set('button', Button);
hostComponents.set('view', View);
hostComponents.set('scroll-view', ScrollView);
hostComponents.set('swiper', Swiper);
hostComponents.set('swiper-item', SwiperItem);

export default hostComponents;
