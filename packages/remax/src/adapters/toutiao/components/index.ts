import React, { forwardRef } from 'react';
import propsAlias from './propsAlias';

export { default as Input } from './Input';
export { default as Textarea } from './Textarea';
export { default as Video } from './Video';
export { default as Swiper } from './Swiper';

interface Props {
  [s: string]: any;
}

function factoryComponent(component: string) {
  // props 类型存在问题
  return forwardRef(<T>(props: React.Props<T> & Props, ref: any) => {
    const { children = [] } = props;
    return React.createElement(
      component,
      propsAlias({ ...props, ref }),
      children
    );
  });
}

export const View = factoryComponent('view');
export const ScrollView = factoryComponent('scroll-view');
export const SwiperItem = factoryComponent('swiper-item');
export const MovableView = factoryComponent('movable-view');
export const MovableArea = factoryComponent('movable-area');
export const CoverView = factoryComponent('cover-view');
export const CoverImage = factoryComponent('cover-image');
export const Icon = factoryComponent('icon');
export const Text = factoryComponent('text');
export const RichText = factoryComponent('rich-text');
export const Progress = factoryComponent('progress');
export const Button = factoryComponent('button');
export const CheckboxGroup = factoryComponent('checkbox-group');
export const Checkbox = factoryComponent('checkbox');
export const Form = factoryComponent('form');
export const Label = factoryComponent('label');
export const Picker = factoryComponent('picker');
export const PickerView = factoryComponent('picker-view');
export const PickerViewColumn = factoryComponent('picker-view-column');
export const RadioGroup = factoryComponent('radio-group');
export const Radio = factoryComponent('radio');
export const Slider = factoryComponent('slider');
export const Switch = factoryComponent('switch');
export const Navigator = factoryComponent('navigator');
export const Image = factoryComponent('image');
export const Camera = factoryComponent('camera');
export const LivePlayer = factoryComponent('live-player');
export const LivePusher = factoryComponent('live-pusher');
export const Map = factoryComponent('map');
export const Canvas = factoryComponent('canvas');
export const OpenData = factoryComponent('open-data');
export const OfficialAccount = factoryComponent('official-account');
export const Editor = factoryComponent('editor');
export const Audio = factoryComponent('audio');
export const Ad = factoryComponent('ad');
export const WebView = factoryComponent('web-view');
export const FunctionalPageNavigator = factoryComponent(
  'functional-page-navigator'
);
