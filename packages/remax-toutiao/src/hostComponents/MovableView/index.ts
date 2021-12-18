import * as React from 'react';
import { createHostComponent } from '@remax/runtime';
import { BaseProps, GenericEvent } from '../../types/component';

/***
 * https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/component/view-container/movable-view
 * 基础库 2.25.0 开始支持本组件。
 * 可移动的视图容器，在页面中可以拖拽滑动。movable-view 必须在 movable-area 组件中，并且必须是直接子节点，否则不能移动。
 */
export interface MovableViewProps extends BaseProps {
  // id属性
  id?: string;
  // 类名属性
  className?: string;
  // 样式属性
  style?: React.CSSProperties;
  // 宽度 默认为10px
  width?: number;
  // 高度 默认为10px
  height?: number;
  // movable-view 的移动方向，属性值有 all、vertical、horizontal、默认:none
  direction?: string;
  // movable-view 是否带有惯性，默认:false
  inertia?: boolean;
  // 超过可移动区域后，movable-view 是否还可以移动，默认:false
  outOfBounds?: boolean;
  // 定义 x 轴方向的偏移，如果 x 的值不在可移动范围内，会自动移动到可移动范围；改变 x 的值会触发动画
  x?: number | string;
  // 定义 y 轴方向的偏移，如果 y 的值不在可移动范围内，会自动移动到可移动范围；改变 y 的值会触发动画
  y?: number | string;
  // 阻尼系数，用于控制 x 或 y 改变时的动画和过界回弹的动画，值越大移动越快，默认:20
  damping?: number;
  // 摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；必须大于 0，否则会被设置成默认:2
  friction?: number;
  // 是否禁用，默认为否
  disabled?: boolean;
  // 是否支持双指缩放，默认缩放手势生效区域是在 movable-view 内，默认否
  scale?: boolean;
  // 定义缩放倍数最小值，，默认:0.5
  scaleMin?: number;
  // 定义缩放倍数最大值，，默认:10
  scaleMax?: number;
  // 定义缩放倍数，取值范围为 0.5 - 10,默认:1
  scaleValue?: number;
  // 是否使用动画，默认:true
  animation?: boolean;
  // 拖动过程中触发的事件，event.detail = {x, y, source}
  onTouchStart?: (e: TouchEvent) => void;
  // 拖动过程中触发的事件，event.detail = {x, y, source}
  onTouchMove?: (e: TouchEvent) => void;
  // 拖动过程中触发的事件，event.detail = {x, y, source}
  onTouchEnd?: (e: TouchEvent) => void;
  // 拖动过程中触发的事件，event.detail = {x, y, source}
  onTouchCancel?: (e: TouchEvent) => void;
  // 拖动过程中触发的事件，event.detail = {x, y, source}
  onTouchChange?: (e: TouchEvent) => void;
  // 拖动过程中触发的事件，event.detail = {x, y, source}
  onChange?: (event: GenericEvent) => any;
  // 缩放过程中触发的事件，event.detail = {x, y, scale}
  onScale?: (event: GenericEvent) => any;
  // 初次手指触摸后移动为横向的移动时触发，如果 catch 此事件，则意味着 touchmove 事件也被 catch
  hTouchmove?: (event: GenericEvent) => any;
  // 初次手指触摸后移动为纵向的移动时触发，如果 catch 此事件，则意味着 touchmove 事件也被 catch
  vTouchmove?: (event: GenericEvent) => any;
}

export const MovableView: React.ComponentType<MovableViewProps> = createHostComponent<MovableViewProps>('movable-view');

MovableView.defaultProps = {
  width: 10,
  height: 10,
  direction: 'none',
  inertia: false,
  outOfBounds: false,
  damping: 20,
  friction: 2,
  disabled: false,
  scale: false,
  scaleMin: 0,
  scaleMax: 10,
  scaleValue: 1,
  animation: true,
};
