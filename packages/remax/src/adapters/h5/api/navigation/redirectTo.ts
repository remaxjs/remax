import router from 'umi/router';
import * as API from '../../../../api';

export const redirectTo: typeof API.redirectTo = params =>
  new Promise(resolve => {
    router.replace(params.url);
    if (params.success) {
      params.success();
    } else {
      resolve();
    }
    if (params.complete) {
      params.complete();
    }
  });
