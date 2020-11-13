import * as React from 'react';
import { createHostComponent } from '@remax/runtime';
import { BaseProps, GenericEvent } from '../../types/component';

export interface CoverImageProps extends BaseProps {
  /** 图标路径，支持临时路径、网络地址（1.6.0起支持）、云文件ID（2.2.3起支持）。暂不支持base64格式。 1.4.0  */
  src?: string;
  /** 图片加载成功时触发 2.1.0  */
  onLoad?: (event: GenericEvent) => any;
  /** 图片加载失败时触发 2.1.0  */
  onError?: (event: GenericEvent) => any;
}

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html
 */
export const CoverImage: React.ComponentType<CoverImageProps> = createHostComponent<CoverImageProps>('cover-image');
