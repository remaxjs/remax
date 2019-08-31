import factory from './factory';
import { CSSProperties } from 'react';

const Image = factory<ImageProps>('image');

export interface ImageProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  src?: string; //  否 图片资源地址 1.0.0
  mode?: string; // scaleToFill 否 图片裁剪、缩放的模式 1.0.0
  lazyLoad?: boolean; // false 否 图片懒加载，在即将进入一定范围（上下三屏）时才开始加载 1.5.0
  showMenuByLongpress?: boolean; // false 否 开启长按图片显示识别小程序码菜单 2.7.0
  onError?: (event: any) => void; //  否 当错误发生时触发，，event.detail = {errMsg} 1.0.0
  onLoad?: (event: any) => void; //  否 当图片载入完毕时触发，event.detail = {height, width} 1.0.0
  animation?: Record<string, any>[];
  onClick?: (event: any) => void;
}

export default Image;
