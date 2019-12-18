import { Plugin } from 'rollup';
import { isNativeComponent } from './util';

const NATIVE_COMPONENT_ID = '__remax-native-component__';

export default (): Plugin => ({
  name: 'native-to-react',
  resolveId(source, importer) {
    if (isNativeComponent(source)) {
      return NATIVE_COMPONENT_ID;
    }

    return null;
  },

  load(id) {
    if (id === NATIVE_COMPONENT_ID) {
      // TODO: 处理成 createNativeComponent
      return `export default {};`;
    }

    return null;
  },
});
