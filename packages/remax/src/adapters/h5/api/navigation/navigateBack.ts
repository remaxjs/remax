import router from 'umi/router';
import * as API from '../../types';

export const navigateBack: typeof API.navigateBack = params => {
  return router.go(-(params.delta || 1));
};
