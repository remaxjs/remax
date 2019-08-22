export interface CallbackType<T = {}> {
  success?: (e: T) => void;
  fail?: (e: { error: number; status: number }) => void;
  complete?: (e: T) => void;
}

export interface MiniAppRequest<U>
  extends CallbackType<{
    data: U;
    status: number;
    headers: Headers;
  }> {
  url: string;
  headers?: HeadersInit;
  method?: 'GET' | 'POST' | undefined;
  data?: { [key: string]: unknown };
  timeout?: number;
  dataType?: 'json' | 'text' | 'base64' | undefined;
}

interface MyType {
  navigateTo: (option: { url: string } & CallbackType) => void;
  redirectTo: (option: { url: string } & CallbackType) => void;
  navigateBack: () => void;
  switchTab: (option: { url: string } & CallbackType) => void;
  showLoading: (option: { content?: string; delay?: number }) => void;
  hideLoading: (option: CallbackType) => void;
  getTitleColor: (
    option: CallbackType<{
      color: string;
    }>
  ) => void;
  hideBackHome: () => void;
  hideNavigationBarLoading: () => void;
  reLaunch: (option: { url: string } & CallbackType) => void;
  setNavigationBar: (
    option: {
      title: string;
      image: string;
      backgroundColor: string;
      borderBottomColor: string;
      reset: boolean;
    } & CallbackType
  ) => void;
  showNavigationBarLoading: (option: CallbackType) => void;
  hideTabBar: (option: { animation: boolean } & CallbackType) => void;
  hideTabBarRedDot: (option: { index: number } & CallbackType) => void;
  removeTabBarBadge: (option: { index: number } & CallbackType) => void;
  setTabBarBadge: (
    option: { index: number; text: string } & CallbackType
  ) => void;
  setTabBarItem: (
    option: {
      index: number;
      text: string;
      iconPath: string;
      selectedIconPath: string;
    } & CallbackType
  ) => void;
  setTabBarStyle: (
    option: {
      color: string;
      selectedColor: string;
      backgroundColor: string;
      borderStyle: string;
    } & CallbackType
  ) => void;
  showTabBar: (option: { animation: boolean } & CallbackType) => void;
  showTabBarRedDot: (option: { number: boolean } & CallbackType) => void;
  confirm: (
    option: {
      title: string;
      content: string;
      confirmButtonText: string;
      cancelButtonText: string;
    } & CallbackType<{ confirm: string }>
  ) => void;
  hideToast: (option: CallbackType) => void;
  prompt: (
    option: {
      title: string;
      message: string;
      placeholder: string;
      align: string;
      okButtonText: string;
      cancelButtonText: string;
    } & CallbackType<{ ok: boolean; inputValue: string }>
  ) => void;
  showActionSheet: (
    option: {
      title: string;
      items: string[];
      cancelButtonText: string;
      destructiveBtnIndex: number;
      badges: object[];
    } & CallbackType<{
      index: number;
      type: string;
      text: string;
    }>
  ) => void;

  startPullDownRefresh: (option: CallbackType) => void;
  stopPullDownRefresh: (option: CallbackType) => void;
  chooseAlipayContact: (
    option: { count: number } & CallbackType<{ contacts: object[] }>
  ) => void;
  chooseContact: (
    option: {
      chooseType: string;
      includeMobileContactMode: string;
      includeMe: boolean;
      multiChooseMax: number;
      multiChooseMaxTips: string;
    } & CallbackType<{ contactsDicArray: object[] }>
  ) => void;
  choosePhoneContact: (
    option: CallbackType<{ name: string; mobile: string }>
  ) => void;

  chooseCity: (
    option: {
      showLocatedCity: boolean;
      showHotCities: boolean;
      cities: object[];
      hotCities: object[];
    } & CallbackType<{
      city: string;
      adCode: string;
      spell: string;
    }>
  ) => void;
  datePicker: (
    option: {
      format: string;
      currentDate: string;
      startDate: string;
      endDate: string;
    } & CallbackType<{
      date: string;
    }>
  ) => void;
  createAnimation: (option: {
    duration: number;
    timeFunction: string;
    delay: number;
    transformOrigin: string;
  }) => void;

  createCanvasContext: (option: { canvasId: string }) => void;
  // createMapContext: (option: { mapId: string; this: string }) => void;
  hideKeyboard: () => void;
  pageScrollTo: (option: { scrollTop: number }) => void;
  createIntersectionObserver: (
    option: {
      thresholds: number[];
      initialRatio: number;
      selectAll: boolean;
    } & CallbackType
  ) => void;
  createSelectorQuery: (option: { params: object }) => void;
  optionsSelect: (
    option: {
      title: string;
      optionsOne: string[];
      optionsTwo: string[];
      selectedOneIndex: number;
      selectedTwoIndex: number;
      positiveString: string;
      negativeString: string;
    } & CallbackType<{
      selectedOneIndex: number;
      selectedOneOption: string;
      selectedTwoIndex: number;
      selectedTwoOption: string;
    }>
  ) => void;
  multiLevelSelect: (
    option: {
      title: string;
      list: any;
      name: string;
      subList: object[];
    } & CallbackType<{
      success: boolean;
      result: object[];
    }>
  ) => void;
  setBackgroundColor: (option: {
    backgroundColor: string;
    backgroundColorTop: string;
    backgroundColorBottom: string;
  }) => void;
  setBackgroundTextStyle: (
    option: { textStyle: string } & CallbackType
  ) => void;
  setCanPullDown: (option: { canPullDown: boolean } & CallbackType) => void;
  setOptionMenu: (option: { icon: string } & CallbackType) => void;
  loadFontFace: (
    option: { family: string; source: string; desc: object } & CallbackType
  ) => void;
  chooseImage: (
    option: {
      count: number;
      sizeType: string[];
      sourceType: string[];
    } & CallbackType<{ apFilePaths: string[] }>
  ) => void;
  compressImage: (
    option: { apFilePaths: string[]; compressLevel: number } & CallbackType<{
      apFilePaths: string[];
    }>
  ) => void;
  getImageInfo: (
    option: { src: string } & CallbackType<{
      width: number;
      height: number;
      path: string;
      orientation: string;
      type: string;
    }>
  ) => void;
  previewImage: (
    option: { icon: any[]; current: number } & CallbackType
  ) => void;
  saveImage: (option: { url: string } & CallbackType) => void;
  clearStorage: () => void;
  clearStorageSync: () => void;
  getStorage: (
    option: { key: string } & CallbackType<{ data: object | string }>
  ) => void;
  getStorageInfo: (
    option: CallbackType<{
      keys: string[];
      currentSize: number;
      limitSize: number;
    }>
  ) => void;
  getStorageInfoSync: (
    option: CallbackType<{
      keys: string[];
      currentSize: number;
      limitSize: number;
    }>
  ) => void;
  getStorageSync: (
    option: { key: string } & CallbackType<{ data: object | string }>
  ) => void;
  removeStorage: (option: { key: string } & CallbackType) => void;
  removeStorageSync: (option: { key: string } & CallbackType) => void;
  setStorage: (
    option: { key: string; data: object | string } & CallbackType
  ) => void;
  setStorageSync: (
    option: { key: string; data: object | string } & CallbackType
  ) => void;
  showToast: (
    option: {
      type: 'success' | 'fail' | 'exception' | 'none';
      content?: string;
      duration?: number;
    } & CallbackType
  ) => void;
  alert: (
    option: {
      title?: string;
      content?: string;
      buttonText?: string;
    } & CallbackType
  ) => void;
  getAuthCode: (
    option: {
      scopes?: 'auth_base' | 'auth_user' | 'auth_zhima';
    } & CallbackType<{
      authCode: string;
    }>
  ) => void;
  request: <T = {}>(
    option: MiniAppRequest<T>
  ) => {
    abort: () => void;
  };
  [key: string]: any;
}

export default MyType;
