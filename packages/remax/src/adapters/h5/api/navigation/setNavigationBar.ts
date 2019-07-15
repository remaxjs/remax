import * as API from '../../../../api';

export const setNavigationBarTitle: typeof API.setNavigationBarTitle = params => {
  return new Promise(resolve => {
    window.document.title = params.title || '';
    resolve();
  });
};
