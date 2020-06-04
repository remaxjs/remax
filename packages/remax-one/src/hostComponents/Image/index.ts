import createHostComponent from '../../createHostComponent';
import ImageProps from './props';

export type { ImageProps };

const Image = createHostComponent<ImageProps>('image', {
  wechat: {
    mode: 'scaleToFill',
    'wechat-webp': false,
    'wechat-lazyLoad': false,
    'wechat-show-menu-by-longpress': false,
  },
});

export default Image;
