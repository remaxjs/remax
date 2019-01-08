import React from 'react';

const components = [
  'view',
  'scroll-view',
  'swiper',
  'movable-view',
  'movable-area',
  'cover-view',
  'cover-image',
  'icon',
  'text',
  'rich-text',
  'progress',
  'button',
  'checkbox-group',
  'checkbox',
  'form',
  'input',
  'label',
  'picker',
  'picker-view',
  'radio-group',
  'radio',
  'slider',
  'switch',
  'textarea',
  'navigator',
  'image',
  'video',
  'camera',
  'live-player',
  'live-pusher',
  'map',
  'canvas',
  'open-data',
  'official-account',
];

const camelCased = (_str) => {
  const str = _str.split('').map((ch, index) => (index === 0 ? ch.toUpperCase() : ch)).join('');
  return str.replace(/-([a-z0-9])/g, (g) => { return g[1].toUpperCase(); });
};

const resultComponents = {};

const eventAlias = {
  onClick: 'tap',
};

for (const component of components) {
  resultComponents[camelCased(component)] = (props) => {
    const Tag = `mini-${component}`;
    const {
      children,
    } = props;
    const newProps = {};
    for (const propKey of Object.keys(props)) {
      if (eventAlias[propKey]) {
        newProps[`bind${eventAlias[propKey]}`] = props[propKey];
      } else {
        newProps[propKey] = props[propKey];
      }
    }
    return React.createElement(Tag, newProps, children);
  };
}

module.exports = resultComponents;
