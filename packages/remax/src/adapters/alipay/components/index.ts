import React, { forwardRef } from 'react';
import propsAlias from './propsAlias';

export type HostComponent =
  | 'view'
  | 'scroll-view'
  | 'swiper'
  | 'swiper-item'
  | 'movable-view'
  | 'movable-area'
  | 'cover-view'
  | 'cover-image'
  | 'icon'
  | 'text'
  | 'rich-text'
  | 'progress'
  | 'button'
  | 'checkbox-group'
  | 'checkbox'
  | 'form'
  | 'input'
  | 'label'
  | 'picker'
  | 'picker-view'
  | 'radio-group'
  | 'radio'
  | 'slider'
  | 'switch'
  | 'textarea'
  | 'navigator'
  | 'image'
  | 'video'
  | 'camera'
  | 'live-player'
  | 'live-pusher'
  | 'map'
  | 'canvas'
  | 'open-data'
  | 'official-account';

interface Props {
  [s: string]: any;
}

function factoryComponent(component: HostComponent) {
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
export const Swiper = factoryComponent('swiper');
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
export const Input = factoryComponent('input');
export const Label = factoryComponent('label');
export const Picker = factoryComponent('picker');
export const PickerView = factoryComponent('picker-view');
export const RadioGroup = factoryComponent('radio-group');
export const Radio = factoryComponent('radio');
export const Slider = factoryComponent('slider');
export const Switch = factoryComponent('switch');
export const Textarea = factoryComponent('textarea');
export const Navigator = factoryComponent('navigator');
export const Image = factoryComponent('image');
export const Video = factoryComponent('video');
export const Camera = factoryComponent('camera');
export const LivePlayer = factoryComponent('live-player');
export const LivePusher = factoryComponent('live-pusher');
export const Map = factoryComponent('map');
export const Canvas = factoryComponent('canvas');
export const OpenData = factoryComponent('open-data');
export const OfficialAccount = factoryComponent('official-account');
