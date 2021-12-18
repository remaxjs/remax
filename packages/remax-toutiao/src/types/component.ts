import * as React from 'react';
import { BaseEvent } from '@remax/wechat/esm/types/component';

/**
 * 头条内置共有属性
 * https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/component/introduction/basic-componen
 */
export interface BaseProps {
  /** 组件的唯一标示: 保持整个页面唯一 */
  id?: string;
  /** 组件的样式类: 在对应的 TTSS 中定义的样式类 */
  className?: string;
  /** 组件的内联样式: 可以动态设置的内联样式 */
  style?: React.CSSProperties;
  /** 组件是否显示: 所有组件默认显示 */
  hidden?: boolean;
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
