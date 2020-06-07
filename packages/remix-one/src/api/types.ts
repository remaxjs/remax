export interface NavigateToParams {
  url: string;
}

export declare function navigateTo(params: NavigateToParams): Promise<void>;

export interface NavigateBackParams {
  /** 返回的页面数 */
  delta?: number;
}

export declare function navigateBack(params?: NavigateBackParams): Promise<void>;

export interface RedirectToParams {
  url: string;
}

export declare function redirectTo(params: RedirectToParams): Promise<void>;

export interface ReLaunchParams {
  url: string;
}

export declare function reLaunch(params: ReLaunchParams): Promise<void>;

export interface SwitchTabParams {
  url: string;
}

export declare function switchTab(params: SwitchTabParams): Promise<void>;
