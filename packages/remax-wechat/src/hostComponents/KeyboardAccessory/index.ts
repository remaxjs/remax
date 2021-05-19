import * as React from 'react';
import { createHostComponent } from '@remax/runtime';
import { BaseProps } from '../../types/component';

export type KeyboardAccessoryProps = BaseProps;

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/keyboard-accessory.html
 */
export const KeyboardAccessory: React.ComponentType<KeyboardAccessoryProps> = createHostComponent<KeyboardAccessoryProps>(
  'KeyboardAccessory'
);
