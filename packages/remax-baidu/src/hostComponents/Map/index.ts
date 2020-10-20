import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps, GenericEvent } from '../../types/component';

interface point {
  latitude: number;
  longitude: number;
}

interface polyline {
  /** 经纬度数组 */
  points?: point[];
  /** 线的颜色 */
  color?: string;
  /** 线的宽度 */
  width?: number;
  /** 是否虚线 */
  dottedLine?: boolean;
  /** 带箭头的线 */
  arrowLine?: boolean;
  /** 更换箭头图标 */
  arrowIconPath?: string;
  /** 线的边框颜色 */
  borderColor?: string;
  /** 线的厚度 */
  borderWidth?: number;
}

interface polygon {
  /** 经纬度数组 */
  points?: any[];
  /** 描边的宽度 */
  strokeWidth?: number;
  /** 描边的颜色 */
  strokeColor?: string;
  /** 填充颜色 */
  fillColor?: string;
  /** 设置多边形 Z 轴数值 */
  zIndex?: number;
}

interface label {
  /** 文本 */
  content?: string;
  /** 文本颜色 */
  color?: string;
  /** 文字大小 */
  fontSize?: number;
  /** label 的坐标，原点是 marker 对应的经纬度 */
  x?: number;
  /** label 的坐标，原点是 marker 对应的经纬度 */
  y?: number;
  /** 边框宽度 */
  borderWidth?: number;
  /** 边框颜色 */
  borderColor?: string;
  /** 边框圆角 */
  borderRadius?: number;
  /** 背景色 */
  bgColor?: string;
  /** 文本边缘留白 */
  padding?: number;
  /** 文本对齐方式。有效值： left ， right ， center 。 */
  textAlign?: 'left' | 'right' | 'center';
}

interface callout {
  /** 文本 */
  content?: string;
  /** 文本颜色 */
  color?: string;
  /** 文字大小 */
  fontSize?: number;
  /** 边框宽度 */
  borderWidth?: number;
  /** 边框颜色 */
  borderColor?: string;
  /** callout 边框圆角 */
  borderRadius?: number;
  /** 背景色 */
  bgColor?: string;
  /** 文本边缘留白 */
  padding?: number;
  /** 'BYCLICK':点击显示; 'ALWAYS':常显 */
  display?: 'ALWAYS' | 'BYCLICK';
  /** 文本对齐方式。有效值： left ， right ， center 。 */
  textAlign?: 'left' | 'right' | 'center';
}

interface marker {
  /** 标记点 id marker 点击事件回调会返回此 id。建议为每个 marker 设置 Number 类型的 id，保证更新 marker 时有更好的性能。*/
  markerId?: number;
  /** 纬度 浮点数，范围 -90 ~ 90 。*/
  latitude: number;
  /** 经度 浮点数，范围 -180 ~ 180 。*/
  longitude: number;
  /** 显示层级 */
  zIndex?: number;
  /** 显示的图标 项目目录下的图片路径，支持网络路径、本地路径（相对和绝对路径写法），工具暂不支持绝对路径写法。*/
  iconPath: string;
  /** 旋转角度 默认为 0，顺时针旋转的角度，范围 0 ~ 360 。*/
  rotate?: number;
  /** 标注的透明度 默认为 1，无透明，范围 0 ~ 1 。*/
  alpha?: number;
  /** 标注图标宽度 默认为图片实际宽度*/
  width?: number;
  /** 标注图标高度 默认为图片实际高度*/
  height?: number;
  /** 自定义标记点上方的气泡窗口 支持的属性见下表，可识别换行符。*/
  callout?: callout;
  /** 为标记点旁边增加标签 支持的属性见下表，可识别换行符。*/
  label?: label;
  /** 经纬度在标注图标的锚点 默认底边中点，{x, y}，x 表示横向(0-1)，y 表示竖向(0-1)。{x: .5, y: 1} 表示底边中点。*/
  anchor?: polygon;
}

interface circle {
  /** 纬度 */
  latitude?: number;
  /** 经度 */
  longitude?: number;
  /** 描边的颜色 */
  color?: string;
  /** 填充颜色 */
  fillColor?: string;
  /** 半径 */
  radius?: number;
  /** 描边的宽度 */
  strokeWidth?: number;
}

interface control {
  /** 控件 id */
  controlId?: number;
  /** 控件在地图的位置 */
  position?: {
    left?: number;
    top?: number;
    width?: number;
    height?: number;
  };
  /** 显示的图标 */
  iconPath?: string;
  /** 是否可点击 */
  clickable?: boolean;
}

export interface MapProps extends BaseProps {
  longitude?: number;
  latitude?: number;
  scale?: number;
  markers?: marker[];
  polyline?: polyline[];
  polygons?: polygon[];
  circles?: circle[];
  controls?: control[];
  includePoints?: point[];
  showLocation?: boolean;
  enable3D?: boolean;
  showCompass?: boolean;
  enableOverlooking?: boolean;
  enableZoom?: boolean;
  enableScroll?: boolean;
  enableRotate?: boolean;
  onMarkerTap?: (event: GenericEvent) => void;
  onCalloutTap?: (event: GenericEvent) => void;
  onControlTap?: (event: GenericEvent) => void;
  onRegionChange?: (event: GenericEvent) => void;
  onUpdated?: (event: GenericEvent) => void;
  onPoitap?: (event: GenericEvent) => void;
}

export const Map: React.ComponentType<MapProps> = createHostComponent<MapProps>('swiper');

Map.defaultProps = {
  scale: 16,
  showLocation: false,
  enable3D: false,
  showCompass: false,
  enableOverlooking: false,
  enableZoom: true,
  enableScroll: true,
  enableRotate: false,
};
