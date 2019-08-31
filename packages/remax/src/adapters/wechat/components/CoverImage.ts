import factory from './factory';
import { CSSProperties } from 'react';

const CoverImage = factory<CoverImageProps>('cover-image');

export interface CoverImageProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  src?: string; //  否 图标路径，支持临时路径、网络地址（1.6.0起支持）、云文件ID（2.2.3起支持）。暂不支持base64格式。 1.4.0
  onLoad?: (event: any) => void; // 否 图片加载成功时触发 2.1.0
  onError?: (event: any) => void; //  否 图片加载失败时触发 2.1.0
  animation?: Record<string, any>[];
  onClick?: (event: any) => void;
}

export default CoverImage;
