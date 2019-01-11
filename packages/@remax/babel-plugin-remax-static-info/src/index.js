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
];

const propsAlias = {
  className: 'class',
  onClick: 'bindtap',
  onTap: 'bindtap',
};

module.exports = ({ types }) => ({
  visitor: {
    JSXElement(path, state) {
      const componentName = path.node.openingElement.name.name;
      const binding = path.scope.getBinding(componentName);
      const componentPath = get(binding, 'path');
      let notBaseComponent = true;
      if (componentPath && componentPath.node.type === 'ImportSpecifier' && componentPath.parent.source.value === '@remax/components') {
        notBaseComponent = false;
      }

      if (notBaseComponent) return;

      // 基础组件
      const propKeys = path.node.openingElement.attributes.map((e) => {
        const propName = get(e, 'name.name');
        if (propsAlias[propName]) {
          e.name.name = propsAlias[propName];
        }
        if (propName === 'key') {
          // ignore key
          return;
        }
        return get(e, 'name.name');
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
