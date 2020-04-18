import { browserHistory as history } from '@remax/router/web';
import { NavigateToParams, RedirectToParams, NavigateBackParams, ReLaunchParams, SwitchTabParams } from './types';

export function navigateTo(params: NavigateToParams) {
  history.push(params.url);

  return Promise.resolve();
}

export function navigateBack(params?: NavigateBackParams) {
  history.go(-(params?.delta || 1));

  return Promise.resolve();
}

export function redirectTo(params: RedirectToParams) {
  history.replace(params.url);

  return Promise.resolve();
}

export function reLaunch(params: ReLaunchParams) {
  window.location.href = params.url;
}

export function switchTab(params: SwitchTabParams) {
  navigateTo(params);
}
