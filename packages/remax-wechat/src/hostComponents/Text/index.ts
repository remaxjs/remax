import * as React from 'react';
import { createHostComponent } from '@remax/runtime';
import { BaseProps } from '../../types/component';

export interface TextProps extends BaseProps {
  /** (default: false) 文本是否可选 文本是否可选 (已废弃) 1.1.0 */
  selectable?: boolean;
  /** 文本是否可选，该属性会使文本节点显示为 inline-block 2.12.1 */
  userSelect?: boolean;
  /**
   * 1.4.0
   * 显示连续空格
   *
   * @ ensp: 中文字符空格一半大小;
   * @ emsp: 中文字符空格大小;
   * @ nbsp: 根据字体设置的空格大小;
   */
  space?: 'ensp' | 'emsp' | 'nbsp';
  /** (default: false) 是否解码 1.4.0 */
  decode?: boolean;
}

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/text.html
 */
export const Text: React.ComponentType<TextProps> = createHostComponent<TextProps>('text');

Text.defaultProps = {
  selectable: false,
  userSelect: false,
  decode: false,
};
