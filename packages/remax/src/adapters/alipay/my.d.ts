import promisify from '../../utils/promisify';

interface CallbackType<T = {}> {
  success?: (e: T) => void;
  fail?: (e: { error: number; status: number }) => void;
  complete?: (e: T) => void;
}

interface MiniAppRequest<U>
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

interface BadgeType {
  index: number;
  type: string;
  text: string;
}
interface ContactType {
  realName: string;
  mobile: string;
  email: string;
  avatar: string;
  userId: string;
}

interface ContactsDicArrayType {
  userId: string;
  avatar: string;
  mobile: string;
  realName: string;
  displayName: string;
}

interface FileListType {
  size: number;
  createTime: number;
  apFilePath: string;
}

interface DescType {
  style: 'normal ' | 'italic ' | 'oblique' | undefined;
  weight: string;
  variant: string;
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
      title?: string;
      image?: string;
      backgroundColor?: string;
      borderBottomColor?: string;
      reset?: boolean;
    } & CallbackType
  ) => void;
  showNavigationBarLoading: (option: CallbackType) => void;
  hideTabBar: (option: { animation?: boolean } & CallbackType) => void;
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
  showTabBar: (option: { animation?: boolean } & CallbackType) => void;
  showTabBarRedDot: (option: { index: number } & CallbackType) => void;
  confirm: (
    option: {
      title?: string;
      content?: string;
      confirmButtonText?: string;
      cancelButtonText?: string;
    } & CallbackType<{ confirm: boolean }>
  ) => void;
  hideToast: (option: CallbackType) => void;
  prompt: (
    option: {
      title?: string;
      message: string;
      placeholder?: string;
      align?: string;
      okButtonText?: string;
      cancelButtonText?: string;
    } & CallbackType<{ ok: boolean; inputValue: string }>
  ) => void;
  showActionSheet: (
    option: {
      title?: string;
      items: string[];
      cancelButtonText?: string;
      destructiveBtnIndex?: number;
      badges?: BadgeType[];
    } & CallbackType<{
      index: number;
      type: string;
      text: string;
    }>
  ) => void;

  startPullDownRefresh: (option: CallbackType) => void;
  stopPullDownRefresh: (option: CallbackType) => void;
  chooseAlipayContact: (
    option: { count?: number } & CallbackType<{ contacts: ContactType[] }>
  ) => void;
  chooseContact: (
    option: {
      chooseType: string;
      includeMobileContactMode?: string;
      includeMe?: boolean;
      multiChooseMax?: number;
      multiChooseMaxTips?: string;
    } & CallbackType<{ contactsDicArray: ContactsDicArrayType[] }>
  ) => void;
  choosePhoneContact: (
    option: CallbackType<{ name: string; mobile: string }>
  ) => void;

  chooseCity: (
    option: {
      showLocatedCity?: boolean;
      showHotCities?: boolean;
      cities?: object[];
      hotCities?: object[];
    } & CallbackType<{
      city: string;
      adCode: string;
      spell: string;
    }>
  ) => void;
  datePicker: (
    option: {
      format?: string;
      currentDate?: string;
      startDate?: string;
      endDate?: string;
    } & CallbackType<{
      date: string;
    }>
  ) => void;
  createAnimation: (option: {
    duration?: number;
    timeFunction?: string;
    delay?: number;
    transformOrigin?: string;
  }) => void;

  createCanvasContext: (option: { canvasId: string }) => void;
  createMapContext: (option: { mapId: string; this: any }) => void;
  hideKeyboard: () => void;
  pageScrollTo: (option: { scrollTop: number }) => void;
  createIntersectionObserver: (
    option: {
      thresholds: number[];
      initialRatio: number;
      selectAll: boolean;
    } & CallbackType
  ) => void;
  createSelectorQuery: (option: { params: unknown }) => void;
  optionsSelect: (
    option: {
      title?: string;
      optionsOne: string[];
      optionsTwo?: string[];
      selectedOneIndex?: number;
      selectedTwoIndex?: number;
      positiveString?: string;
      negativeString?: string;
    } & CallbackType<{
      selectedOneIndex: number;
      selectedOneOption: string;
      selectedTwoIndex: number;
      selectedTwoOption: string;
    }>
  ) => void;
  multiLevelSelect: (
    option: {
      title?: string;
      list: any;
      name: string;
      subList?: { name: string; [key: string]: any }[];
    } & CallbackType<{
      success: boolean;
      result: { name: string; [key: string]: any }[];
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
  setCanPullDown: (option: { canPullDown: boolean }) => void;
  setOptionMenu: (option: { icon: string }) => void;
  loadFontFace: (
    option: { family: string; source: string; desc?: DescType } & CallbackType
  ) => void;
  chooseImage: (
    option: {
      count?: number;
      sizeType?: string[];
      sourceType?: string[];
    } & CallbackType<{ apFilePaths: string[] }>
  ) => void;
  compressImage: (
    option: { apFilePaths: string[]; compressLevel?: number } & CallbackType<{
      apFilePaths: string[];
    }>
  ) => void;
  getImageInfo: (
    option: { src?: string } & CallbackType<{
      width: number;
      height: number;
      path: string;
      orientation: string;
      type: string;
    }>
  ) => void;
  previewImage: (
    option: { urls: any[]; current?: number } & CallbackType
  ) => void;
  saveImage: (option: { url: string } & CallbackType) => void;
  clearStorage: () => void;
  clearStorageSync: () => void;
  getStorage: (
    option: { key: string } & CallbackType<{ data: unknown | string }>
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
    option: { key: string } & CallbackType<{ data: unknown | string }>
  ) => void;
  removeStorage: (option: { key: string } & CallbackType) => void;
  removeStorageSync: (option: { key: string } & CallbackType) => void;
  setStorage: (
    option: { key: string; data: object | string } & CallbackType
  ) => void;
  setStorageSync: (
    option: { key: string; data: object | string } & CallbackType
  ) => void;
  getFileInfo: (
    option: { apFilePath: string; digestAlgorithm?: string } & CallbackType<{
      size: number;
      digest: string;
    }>
  ) => void;
  getSavedFileInfo: (
    option: { apFilePath: string } & CallbackType<{
      size: number;
      createTime: number;
    }>
  ) => void;
  getSavedFileList: (
    option: CallbackType<{ fileList: FileListType[] }>
  ) => void;
  removeSavedFile: (option: { apFilePath: string } & CallbackType) => void;
  saveFile: (
    option: { apFilePath: string } & CallbackType<{ apFilePath: string }>
  ) => void;
  chooseLocation: (
    option: CallbackType<{
      name: string;
      address: string;
      latitude: number;
      longitude: number;
    }>
  ) => void;
  getLocation: (
    option: { cacheTimeout?: number; type?: number } & CallbackType<{
      longitude: string;
      latitude: string;
      accuracy: string;
      horizontalAccuracy: string;
      country: string;
      countryCode: string;
      province: string;
      city: string;
      cityAdcode: string;
      district: string;
      districtAdcode: string;
      streetNumber: object;
      pois: any[];
    }>
  ) => void;
  openLocation: (
    option: {
      longitude: string;
      latitude: string;
      name: string;
      address: string;
      scale?: number;
    } & CallbackType
  ) => void;
  closeSocket: (option: CallbackType) => void;

  uploadFile: (
    option: {
      url: string;
      filePath: string;
      fileName: string;
      fileType: string;
      header?: HeadersInit;
    } & CallbackType<{
      data: string;
      statusCode: string;
      header: HeadersInit;
    }>
  ) => void;
  canIUse: () => void;
  SDKVersion: () => void;
  getSystemInfo: any;
  getSystemInfoSync: any;
  getNetworkTypy: any;
  offNetworkStatusChange: () => void;
  onNetworkStatusChange: any;
  getClipboard: (option: CallbackType<{ text: string }>) => void;
  setClipboard: (option: { text: string }) => void;
  watchShake: () => void;
  vibrate: () => void;
  vibrateLong: () => void;
  vibrateShort: () => void;
  onAccelerometerChange: (option: { x: number; y: number; z: number }) => void;
  offAccelerometerChange: () => void;
  onGyroscopeChange: (option: { x: number; y: number; z: number }) => void;
  offGyroscopeChange: () => void;
  onCompassChange: (option: { direction: number }) => void;
  offCompassChange: () => void;

  makePhoneCall: (option: { number: string }) => void;
  getServerTime: (option: CallbackType<{ time: string }>) => void;
  onUserCaptureScreen: () => void;
  offUserCaptureScreen: () => void;
  getScreenBrightness: (option: CallbackType) => void;
  setScreenBrightness: (option: { brightness: number } & CallbackType) => void;
  setKeepScreenOn: (option: { keepScreenOn: boolean } & CallbackType) => void;
  getSetting: (option: CallbackType<{ authSetting: any }>) => void;
  openSetting: (option: CallbackType<{ authSetting: any }>) => void;
  addPhoneContact: (
    option: {
      photoFilePath?: string;
      nickName?: string;
      lastName?: string;
      middleName?: string;
      firstName?: string;
      remark?: string;
      mobilePhoneNumber?: string;
      alipayAccount?: string;
      addressCountry?: string;
      addressState?: string;
      addressCity?: string;
      addressStreet?: string;
      addressPostalCode?: string;
      organization?: string;
      title?: string;
      workFaxNumber?: string;
      workPhoneNumber?: string;
      hostNumber?: string;
      email?: string;
      url?: string;
      workAddressCountry?: string;
      workAddressState?: string;
      workAddressCity?: string;
      workAddressStreet?: string;
      workAddressPostalCode?: string;
      homeFaxNumber?: string;
      homePhoneNumber?: string;
      homeAddressCountry?: string;
      homeAddressState?: string;
      homeAddressCity?: string;
      homeAddressStreet?: string;
      homeAddressPostalCode?: string;
    } & CallbackType
  ) => void;

  showAuthGuide: (option: { authType: string }) => void;
  scan: (
    option: { type?: string; hideAlbum?: boolean } & CallbackType<{
      code: string;
      qrCode: string;
      barCode: string;
    }>
  ) => void;
  onMemoryWarning: (option: { level: number }) => void;
  offMemoryWarning: () => void;
  getBatteryInfo: (
    option: CallbackType<{ level: number; isCharging: boolean }>
  ) => void;
  etBatteryInfoSync: (
    option: CallbackType<{ level: number; isCharging: boolean }>
  ) => void;
  connectBLEDevice: (option: { deviceId: string } & CallbackType) => void;
  disconnectBLEDevice: (option: { deviceId: string } & CallbackType) => void;
  getBLEDeviceCharacteristics: (
    option: { deviceId: string; serviceId: string } & CallbackType<{
      characteristics: any[];
    }>
  ) => void;
  getBLEDeviceServices: (
    option: { deviceId: string; serviceId: string } & CallbackType<{
      characteristics: any[];
    }>
  ) => void;
  notifyBLECharacteristicValueChange: any;
  offBLECharacteristicValueChange: any;
  offBLEConnectionStateChanged: () => void;
  onBLECharacteristicValueChange: any;
  onBLEConnectionStateChanged: any;
  writeBLECharacteristicValue: any;
  closeBluetoothAdapter: (option: CallbackType) => void;
  getBluetoothAdapterState: (
    option: CallbackType<{ discovering: boolean; available: boolean }>
  ) => void;
  getBluetoothDevices: any;
  getConnectedBluetoothDevices: any;
  offBluetoothAdapterStateChange: any;
  offBluetoothDeviceFound: any;
  onBluetoothDeviceFound: any;
  onBluetoothAdapterStateChange: any;
  openBluetoothAdapter: any;
  startBluetoothDevicesDiscovery: any;
  stopBluetoothDevicesDiscovery: any;
  getBeacons: any;
  onBeaconServiceChange: any;
  onBeaconUpdate: any;
  startBeaconDiscovery: any;
  stopBeaconDiscovery: any;
  rsa: any;
  hideShareMenu: any;
  showSharePanel: any;
  hideAddToDesktopMenu: () => void;
  hideAllAddToDesktopMenu: () => void;
  hideAllFavoriteMenu: () => void;
  hideFavoriteMenu: () => void;
  getRunScene: any;
  reportAnalytics: any;
  getUpdateManager: any;
  getOpenUserInfo: any;
  getPhoneNumber: any;
  tradePay: any;
  openCardDetail: any;
  openCardList: any;
  openKBVoucherDetail: any;
  openMerchantCardList: any;
  openMerchantTicketList: any;
  openMerchantVoucherList: any;
  openTicketDetail: any;
  openTicketList: any;
  openVoucherDetail: any;
  openVoucherList: any;
  addCardAuth: any;
  textRiskIdentification: any;
  navigateBackMiniProgram: any;
  navigateToMiniProgram: any;
  createWebViewContext: any;
  getRunData: any;
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
