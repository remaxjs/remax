import React, { CSSProperties, Props } from 'react';

interface IProps {
  [s: string]: any;
}

const styleString = (style: CSSProperties) =>
  Object.keys(style).reduce((styleString, key) => {
    const value = (style as any)[key];
    return `${styleString}${key}:${value}`;
  }, '');

function factoryComponent(component: string) {
  // props 类型存在问题
  return <T>(props: Props<T> & IProps) => {
    const newProps: IProps = {};
    for (const propKey of Object.keys(props)) {
      if (propKey === 'style') {
        newProps.style = styleString(props.style!);
      } else {
        newProps[propKey] = props[propKey];
      }
    }
    // ts dose not accept ...emptyArray
    return React.createElement(component, newProps);
  };
}

export const View = factoryComponent('div');
export const ScrollView = factoryComponent('div');
export const Swiper = factoryComponent('div');
export const SwiperItem = factoryComponent('div');
export const MovableView = factoryComponent('div');
export const MovableArea = factoryComponent('div');
export const CoverView = factoryComponent('div');
export const CoverImage = factoryComponent('div');
export const Icon = factoryComponent('div');
export const Text = factoryComponent('span');
export const RichText = factoryComponent('div');
export const Progress = factoryComponent('div');
export const Button = factoryComponent('button');
export const CheckboxGroup = factoryComponent('div');
export const Checkbox = factoryComponent('div');
export const Form = factoryComponent('div');
export const Input = factoryComponent('div');
export const Label = factoryComponent('label');
export const Picker = factoryComponent('div');
export const PickerView = factoryComponent('div');
export const RadioGroup = factoryComponent('div');
export const Radio = factoryComponent('div');
export const Slider = factoryComponent('div');
export const Switch = factoryComponent('div');
export const Textarea = factoryComponent('input');
export const Navigator = factoryComponent('div');
export const Image = factoryComponent('img');
export const Video = factoryComponent('video');
export const Camera = factoryComponent('div');
export const LivePlayer = factoryComponent('div');
export const LivePusher = factoryComponent('div');
export const Map = factoryComponent('div');
export const Canvas = factoryComponent('canvas');
export const OpenData = factoryComponent('div');
export const OfficialAccount = factoryComponent('div');
