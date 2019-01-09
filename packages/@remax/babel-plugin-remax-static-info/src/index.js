const { get } = require('dot-prop');

const camelCased = (_str) => {
  const str = _str.split('').map((ch, index) => (index === 0 ? ch.toUpperCase() : ch)).join('');
  return str.replace(/-([a-z0-9])/g, (g) => { return g[1].toUpperCase(); });
};

const unCamelCased = (_str) => {
  const str = _str.split('').map((ch, index) => (index === 0 ? ch.toLowerCase() : ch)).join('');
  return str.replace(/([A-Z])/g, (g) => { return `-${g[0].toLowerCase()}`; });
};

const components = {};

const componentList = [
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
].map(item => camelCased(item));

const propsAlias = {
  className: 'class',
  onClick: 'bindtap',
};

module.exports = ({ types }) => ({
  visitor: {
    JSXElement(path, state) {
      const componentName = path.node.openingElement.name.name;
      if (componentList.indexOf(componentName) === -1) {
        return;
      }
      const propKeys = path.node.openingElement.attributes.map((e) => {
        const propName = get(e, 'name.name');
        if (propsAlias[propName]) {
          e.name.name = propsAlias[propName];
        }
        return e.name.name;
      }).filter(item => item)
        .sort();

      components[JSON.stringify({
        componentName,
        propKeys,
      })] = {
        type: `${unCamelCased(componentName)}+${propKeys.join('+')}`,
        id: unCamelCased(componentName),
        propKeys,
      };
    },
  },


});


module.exports.getStaticInfo = () => {
  return {
    components: Object.values(components),
  };
};
