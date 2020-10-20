import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps, GenericEvent } from '../../types/component';

export const Tabs: React.ComponentType<TabsProps> = createHostComponent<TabsProps>('tabs');

Tabs.defaultProps = {
  tabsBackgroundColor: '#fff',
  tabsActiveTextColor: '#000',
  tabsInactiveTextColor: '#666',
  tabsUnderlineColor: '#333',
  maxTabItemAmount: 5,
};

export interface TabsProps extends BaseProps {
  /** tabs 背景色,必须填写十六进制颜色 */
  tabsBackgroundColor?: string;
  /** tabs 激活 tab-item 文字颜色 */
  tabsActiveTextColor?: string;
  /** tabs 非激活 tab-item 文字颜色 */
  tabsInactiveTextColor?: string;
  /** tabs 激活 tab-item 下划线颜色 */
  tabsUnderlineColor?: string;
  /** 仅用于普通标签栏组件，当前激活 tab-item 的对应的 name 值，须搭配 bindtabchange 一起使用。 */
  activeName?: string;
  /** 仅用于可寻址标签栏组件，当前 tab 所改变的 url query 中参数 key，需要通过 tabs 修改页面 url 的时候设置。 */
  urlQueryName?: string;
  /** 当前 tabs 视图中最多容纳的 tab-item 数量，低于此数量均分排列，超出此数量划屏。默认五个，开发者可根据业务需求调整 */
  maxTabItemAmount?: number;
  /** tab 被点击的回调，可以在 e.detail.name 中取到当前点击的 tab-item 对应的 name 值 */
  onTabChange?: (event: GenericEvent) => void;
}
