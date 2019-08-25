import * as API from '../../../../api';

export const reLaunch: typeof API.reLaunch = params =>
  new Promise(resolve => {
    window.location.href = params.url;
    resolve();
  });
