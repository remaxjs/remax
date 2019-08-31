import router from 'umi/router';
import * as API from '../../types';

export const navigateTo: typeof API.navigateTo = params => {
  return new Promise(resolve => {
    router.push(params.url);
    if (params.success) {
      params.success();
    } else {
      resolve();
    }
    if (params.complete) {
      params.complete();
    }
  });
};
