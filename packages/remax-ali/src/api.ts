declare const my: any;

interface NavigateTo {
  (params: { url: string }): void;
}

interface NavigateBack {
  (params: { delta?: number }): void;
}

export const navigateTo: NavigateTo = my.navigateTo;
export const navigateBack: NavigateBack = my.navigateBack;
export const redirectTo: NavigateTo = my.redirectTo;
export const reLaunch: NavigateTo = my.reLaunch;
export const switchTab: NavigateTo = my.switchTab;
