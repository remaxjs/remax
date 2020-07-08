import * as React from 'react';
import { ImageLoadEvent, ImageErrorEvent, TapEvent, TouchStartEvent } from '../../../types';

export { default as defaults } from './default';

interface CommonProps {
  // 通用属性
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  /** 图片资源地址 */
  src?: string;
  /** 图片裁剪、缩放的模式 */
  mode?:
    | 'scaleToFill'
    | 'aspectFit'
    | 'aspectFill'
    | 'widthFix'
    | 'top'
    | 'bottom'
    | 'center'
    | 'left'
    | 'right'
    | 'top left'
    | 'top right'
    | 'bottom left'
    | 'bottom right';
}

export default interface ImageProps extends CommonProps, React.AriaAttributes {
  /** 当图片载入完毕时触发 */
  onLoad?: (e: ImageLoadEvent) => void;
  /** 当错误发生时触发 */
  onError?: (e: ImageErrorEvent) => void;
  onTap?: (e: TapEvent) => void;
  onTouchStart?: (e: TouchStartEvent) => void;
  onTouchMove?: (e: TouchStartEvent) => void;
  onTouchEnd?: (e: TouchStartEvent) => void;
  onTouchCancel?: (e: TouchStartEvent) => void;
}

export interface ImageWebProps extends CommonProps, React.HTMLAttributes<HTMLImageElement> {
  onTap?: (e: React.MouseEvent<HTMLImageElement>) => void;
}
