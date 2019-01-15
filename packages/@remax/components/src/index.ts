import React, { CSSProperties, HTMLAttributes, Props } from 'react';
import { TComponent } from './types'

interface IProps extends HTMLAttributes<any> {
  [s: string]: any
}
const camelCased = (_str: string) => {
  const str = _str.split('').map((ch, index) => (index === 0 ? ch.toUpperCase() : ch)).join('');
  return str.replace(/-([a-z0-9])/g, (g) => { return g[1].toUpperCase(); });
};

const styleString = (style: CSSProperties) => (
  Object.entries(style).reduce((styleString, [propName, propValue]) => {
    return `${styleString}${propName}:${propValue};`;
  }, '')
);

function factoryTag(component: string, props: Props<any>) {
  const Tag = `mini-${component}+${Object.keys(props).filter(propKey => propKey !== 'children').sort().join('+')}`;
  return Tag;
}

function factoryComponent(component: TComponent) {
  // props 类型存在问题
  return <T>(props: Props<T> & IProps) => {
    const {
      children
    } = props;
    const newProps: IProps = {};
    for (const propKey of Object.keys(props)) {
      if (propKey === 'style') {
        (<string>newProps.style) = styleString(props.style!);
      } else if (propKey === 'key') {
        // pass
      } else {
        newProps[propKey] = props[propKey];
      }
    }
    const Tag = factoryTag(component, newProps);
    return React.createElement(Tag, newProps, children);
  };
}

const components: TComponent[] =
  [ 'view', 'scroll-view', 'swiper'
  , 'movable-view', 'movable-area', 'cover-view'
  , 'cover-image', 'icon', 'text'
  , 'rich-text', 'progress', 'button'
  , 'checkbox-group', 'checkbox', 'form'
  , 'input', 'label', 'picker'
  , 'picker-view', 'radio-group', 'radio'
  , 'slider', 'switch', 'textarea'
  , 'navigator', 'image', 'video'
  , 'camera', 'live-player', 'live-pusher'
  , 'map', 'canvas', 'open-data'
  , 'official-account'
  ]

export default components.reduce((combine, com) => {
  const name = com.replace(/^(\w)(\w+)\-(\w)(\w+)/, (_, a, b, c, d) => a.toUpperCase() + b + c.toUpperCase() + d)
  return {
    ...combine,
    [name]: factoryComponent(com)
  }
}, {})
