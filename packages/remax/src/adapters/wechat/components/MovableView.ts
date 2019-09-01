import factory from './factory';
import { CSSProperties } from 'react';

const MovableView = factory<MovableViewProps>('movable-view');

export interface MovableViewProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  direction?: string; // none 否 movable-view的移动方向，属性值有all、vertical、horizontal、none 1.2.0
  inertia?: boolean; // false 否 movable-view是否带有惯性 1.2.0
  outOfBounds?: boolean; // false 否 超过可移动区域后，movable-view是否还可以移动 1.2.0
  x?: number; //  否 定义x轴方向的偏移，如果x的值不在可移动范围内，会自动移动到可移动范围；改变x的值会触发动画 1.2.0
  y?: number; //  否 定义y轴方向的偏移，如果y的值不在可移动范围内，会自动移动到可移动范围；改变y的值会触发动画 1.2.0
  damping?: number; // 20 否 阻尼系数，用于控制x或y改变时的动画和过界回弹的动画，值越大移动越快 1.2.0
  friction?: number; // 2 否 摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；必须大于0，否则会被设置成默认值 1.2.0
  disabled?: boolean; // false 否 是否禁用 1.9.90
  scale?: boolean; // false 否 是否支持双指缩放，默认缩放手势生效区域是在movable-view内 1.9.90
  scaleMin?: number; // 0.5 否 定义缩放倍数最小值 1.9.90
  scaleMax?: number; // 10 否 定义缩放倍数最大值 1.9.90
  scaleValue?: number; // 1 否 定义缩放倍数，取值范围为 0.5 - 10 1.9.90
  animation?: boolean; // true 否 是否使用动画 2.1.0
  onClick?: (event: any) => void;
  onChange?: (event: any) => void; //  否 拖动过程中触发的事件，event.detail = {x, y, source} 1.9.90
  onScale?: (event: any) => void; //  否 缩放过程中触发的事件，event.detail = {x, y, scale}，x和y字段在2.1.0之后支持 1.9.90
  hTouchMove?: (event: any) => void; //  否 初次手指触摸后移动为横向的移动时触发，如果catch此事件，则意味着touchmove事件也被catch 1.9.90
  vTouchMove?: (event: any) => void; //  否 初次手指触摸后移动为纵向的移动时触发，如果catch此事件，则意味着touchmove事件也被catch 1.9.90
}

export default MovableView;
