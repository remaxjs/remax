import * as React from 'react';

/** 微信内置组件公共属性 */
// reference: https://developers.weixin.qq.com/miniprogram/dev/framework/view/component.html
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
  /** 动画对象: 由`wx.createAnimation`创建 */
  animation?: Array<Record<string, any>>;

  // reference: https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html
  /** 点击时触发 */
  onClick?: (event: TouchEvent) => void;
  /** 手指触摸动作开始 */
  onTouchStart?: (event: TouchEvent) => void;
  /** 手指触摸后移动 */
  onTouchMove?: (event: TouchEvent) => void;
  /** 手指触摸动作被打断，如来电提醒，弹窗 */
  onTouchCancel?: (event: TouchEvent) => void;
  /** 手指触摸动作结束 */
  onTouchEnd?: (event: TouchEvent) => void;
  /** 手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发 */
  onLongPress?: (event: TouchEvent) => void;
  /** 手指触摸后，超过350ms再离开（推荐使用longpress事件代替） */
  onLongTap?: (event: TouchEvent) => void;
  /** 会在 WXSS transition 或 wx.createAnimation 动画结束后触发 */
  onTransitionEnd?: (event: CustomEvent) => void;
  /** 会在一个 WXSS animation 动画开始时触发 */
  onAnimationStart?: (event: CustomEvent) => void;
  /** 会在一个 WXSS animation 一次迭代结束时触发 */
  onAnimationiteration?: (event: CustomEvent) => void;
  /** 会在一个 WXSS animation 动画完成时触发 */
  onAnimationEnd?: (event: CustomEvent) => void;
  /** 在支持 3D Touch 的 iPhone 设备，重按时会触发 */
  onTouchForceChange?: (event: TouchEvent) => void;

  /** 点击时触发同时阻止事件冒泡 */
  catchClick?: (event: any) => any;
}

// reference: https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html

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
export interface CustomEvent<Detail = any> extends BaseEvent {
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
