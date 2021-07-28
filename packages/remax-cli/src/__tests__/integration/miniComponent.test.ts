import { testBuildMiniComponent } from './helpers/runTest';

describe('mini component build', function () {
  testBuildMiniComponent(
    'mini-component-basic',
    {
      greet: 'components/greet/index',
      greet2: 'components/greet2/index',
    },
    ['ali', 'wechat']
  );
});
