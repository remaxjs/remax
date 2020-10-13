import { RuntimeOptions } from '@remax/runtime';
import { NavigateToParams, RedirectToParams, NavigateBackParams, ReLaunchParams, SwitchTabParams } from './types';

export function navigateTo(params: NavigateToParams) {
  const history = RuntimeOptions.get('history');
  history.push(params.url);

  return Promise.resolve();
}

export function navigateBack(params?: NavigateBackParams) {
  const history = RuntimeOptions.get('history');
  history.go(-(params?.delta || 1));

  return Promise.resolve();
}

export function redirectTo(params: RedirectToParams) {
  const history = RuntimeOptions.get('history');
  history.replace(params.url);

  return Promise.resolve();
}

export function reLaunch(params: ReLaunchParams) {
  window.location.href = params.url;
}

export function switchTab(params: SwitchTabParams) {
  navigateTo(params);
}
