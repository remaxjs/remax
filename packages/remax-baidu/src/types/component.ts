import * as React from 'react';

export interface BaseProps {
  /** 自定义属性: 组件上触发的事件时，会发送给事件处理函数 */
  readonly dataset?: DOMStringMap;
  /** 组件的唯一标示: 保持整个页面唯一 */
  id?: string;
  /** 组件的样式类: 在对应的 WXSS 中定义的样式类 */
  className?: string;
  /** 组件的内联样式: 可以动态设置的内联样式 */
  style?: React.CSSProperties;
  /** 组件是否显示: 所有组件默认显示 */
  hidden?: boolean;
  /** 动画对象: 由`swan.createAnimation`创建 */
  animation?: Array<Record<string, any>>;
  // reference: https://smartprogram.baidu.com/docs/develop/framework/view_incident/
  /** 触摸后马上离开 */
  onTap?: (event: TouchEvent) => void;
  /** 触摸后超过 350ms 再离开（推荐使用 longpress 事件代替） */
  onLongTap?: (event: TouchEvent) => void;
  /** 触摸后超过 350ms 再离开，如果是指定了事件回调函数并触发了这个事件，tap 事件将不被触发 */
  onLongPress?: (event: TouchEvent) => void;
  /** 触摸开始时 */
  onTouchStart?: (event: TouchEvent) => void;
  /** 触摸后移动时 */
  onTouchMove?: (event: TouchEvent) => void;
  /** 触摸后被打断时，如来电等 */
  onTouchCancel?: (event: TouchEvent) => void;
  /** 触摸结束时 */
  onTouchEnd?: (event: TouchEvent) => void;
  /** 支持 3D Touch 的 iPhone 设备，重按时会触发。 */
  onTouchForceChange?: (event: TouchEvent) => void;
  /** 会在 transition 或 swan.createAnimation 动画结束后触发 */
  onTransitionEnd?: (event: TouchEvent) => void;
  /** 会在 animation 动画开始时触发 */
  onAnimationStart?: (event: GenericEvent) => void;
  /** 会在 animation 一次迭代结束时触发 */
  onAnimationIteration?: (event: GenericEvent) => void;
  /** 会在 animation 动画完成时触发 */
  onAnimationEnd?: (event: GenericEvent) => void;
}

interface Target {
  /** 事件源组件的id */
  id: string;
  /** 事件源组件上的 `dataset` 自定义属性组成的集合 */
  dataset: any;
}

/** 基础事件对象属性列表 */
export interface BaseEvent {
  /** 事件类型 */
  type: string;
  /** 页面打开到触发事件所经过的毫秒数 */
  timeStamp: number;
  /** 触发事件的源组件 */
  target: Target;
  /**
   * 当前组件的一些属性值集合
   * @特殊事件 canvas 中的触摸事件不可冒泡，所以没有 currentTarget
   */
  currentTarget: Target;
  /** 事件标记数据 */
  mark: any;
}

/** 自定义事件对象属性列表 */
export interface GenericEvent<Detail = any> extends BaseEvent {
  /** 额外的信息 */
  detail: Detail;
}

/** 触摸事件对象属性列表 */
export interface TouchEvent<T = Touch> extends BaseEvent {
  /** 触摸事件，当前停留在屏幕中的触摸点信息的数组 */
  touches: T[];
  /** 触摸事件，当前变化的触摸点信息的数组 */
  changedTouches: T[];
}
