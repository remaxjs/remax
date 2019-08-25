import * as API from '../../../../api';

export const setNavigationBar: typeof API.setNavigationBar = params =>
  new Promise(resolve => {
    window.document.title = params.title || '';
    resolve();
  });
