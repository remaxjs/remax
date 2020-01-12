import createHostComponent from '../../createHostComponent';
import { BaseProps } from '../../types/component';

export interface ImageProps extends BaseProps {
  /**
   * 1.0.0
   * 图片资源地址
   */
  src?: string;
  /**
   * 1.0.0
   * 图片裁剪、缩放的模式
   * scaleToFill	缩放模式，不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
   * aspectFit	缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。
   * aspectFill	缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。
   * widthFix	缩放模式，宽度不变，高度自动变化，保持原图宽高比不变
   * top	裁剪模式，不缩放图片，只显示图片的顶部区域
   * bottom	裁剪模式，不缩放图片，只显示图片的底部区域
   * center	裁剪模式，不缩放图片，只显示图片的中间区域
   * left	裁剪模式，不缩放图片，只显示图片的左边区域
   * right	裁剪模式，不缩放图片，只显示图片的右边区域
   * top left	裁剪模式，不缩放图片，只显示图片的左上边区域
   * top right	裁剪模式，不缩放图片，只显示图片的右上边区域
   * bottom left	裁剪模式，不缩放图片，只显示图片的左下边区域
   * bottom right	裁剪模式，不缩放图片，只显示图片的右下边区域
   */
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
  /**
   * 1.5.0
   * 图片懒加载，在即将进入一定范围（上下三屏）时才开始加载
   */
  lazyLoad?: boolean;
  /**
   * 2.7.0
   * 开启长按图片显示识别小程序码菜单
   */
  showMenuByLongpress?: boolean;
  /**
   * 1.0.0
   * 当错误发生时触发，，event.detail = {errMsg}
   */
  onError?: (event: any) => any;
  /**
   * 1.0.0
   * 当图片载入完毕时触发，event.detail = {height, width}
   */
  onLoad?: (event: any) => any;
}

export default createHostComponent<ImageProps>('image');
