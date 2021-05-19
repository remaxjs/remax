import * as React from 'react';
import { BaseProps, GenericEvent } from '../../types/component';
import { createHostComponent } from '@remax/runtime';

export interface InputProps extends BaseProps {
  /**
   * 1.0.0
   * (即将废弃，请直接使用 focus )自动聚焦，拉起键盘
   */
  autoFocus?: boolean;
  /**
   * 1.0.0
   * 获取焦点
   */
  focus?: boolean;
  /** 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效) 2.10.4 */
  alwaysEmbed?: boolean;
  name?: string;
  /**
   * 1.0.0
   * 最大输入长度，设置为 -1 的时候不限制最大长度
   */
  maxlength?: number;
  /**
   * 1.0.0
   * 输入框的初始内容
   */
  value?: any;
  /**
   * 1.0.0
   * 是否是密码类型
   */
  password?: boolean;
  /**
   * 1.0.0
   * input 的类型
   *
   * text	文本输入键盘
   * number	数字输入键盘
   * idcard	身份证输入键盘
   * digit	带小数点的数字键盘
   */
  type?: 'text' | 'number' | 'idcard' | 'digit';
  /**
   * 1.1.0
   * 设置键盘右下角按钮的文字，仅在type='text'时生效
   *
   * send	右下角按钮为“发送”
   * search	右下角按钮为“搜索”
   * next	右下角按钮为“下一个”
   * go	右下角按钮为“前往”
   * done	右下角按钮为“完成”
   */
  confirmType?: 'send' | 'search' | 'next' | 'go' | 'done';
  /**
   * 1.1.0
   * 点击键盘右下角按钮时是否保持键盘不收起
   */
  confirmHold?: boolean;
  /**
   * 1.5.0
   * 指定focus时的光标位置
   */
  cursor?: number;
  /**
   * 1.9.0
   * 光标起始位置，自动聚集时有效，需与selection-end搭配使用
   */
  selectionStart?: number;
  /**
   * 1.9.0
   * 光标结束位置，自动聚集时有效，需与selection-start搭配使用
   */
  selectionEnd?: number;
  /**
   * 1.9.90
   * 键盘弹起时，是否自动上推页面
   */
  adjustPosition?: boolean;
  /**
   * 2.8.2
   * focus时，点击页面的时候不收起键盘
   */
  holdKeyboard?: boolean;
  /**
   * 1.0.0
   * 输入框为空时占位符
   */
  placeholder?: string;
  /**
   * 1.0.0
   * 指定 placeholder 的样式
   */
  placeholderStyle?: React.CSSProperties;
  /**
   * 1.0.0
   * 指定 placeholder 的样式类
   */
  placeholderClassName?: string;
  /**
   * 1.0.0
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 1.0.0
   * 指定光标与键盘的距离，取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离
   */
  cursorSpacing?: number;
  /**
   * 1.0.0
   * 键盘输入时触发，event.detail = {value, cursor, keyCode}，keyCode 为键值，
   * 2.1.0 起支持，处理函数可以直接 return 一个字符串，将替换输入框的内容。
   */
  onInput?: (event: GenericEvent) => void;
  /**
   * 1.0.0
   * 输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度，在基础库 1.9.90 起支持
   */
  onFocus?: (event: GenericEvent) => void;
  /**
   * 1.0.0
   * 输入框失去焦点时触发，event.detail = {value: value}
   */
  onBlur?: (event: GenericEvent) => void;
  /**
   * 1.0.0
   * 点击完成按钮时触发，event.detail = {value: value}
   */
  onConfirm?: (event: GenericEvent) => any;
  /**
   * 2.7.0
   * 键盘高度发生变化的时候触发此事件，event.detail = {height: height, duration: duration}
   */
  onKeyboardHeightChange?: (event: GenericEvent) => any;
}

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/input.html
 */
export const Input: React.ComponentType<InputProps> = createHostComponent<InputProps>('input');

Input.defaultProps = {
  type: 'text',
  password: false,
  placeholderClassName: 'input-placeholder',
  disabled: false,
  cursorSpacing: 0,
  autoFocus: false,
  focus: false,
  alwaysEmbed: false,
  confirmType: 'done',
  confirmHold: false,
  maxlength: 140,
  selectionEnd: -1,
  selectionStart: -1,
  adjustPosition: true,
  holdKeyboard: false,
};
