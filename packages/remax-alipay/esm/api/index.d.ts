export declare const getAppStub: any;
export declare const addCardAuth: (
  arg?: my.IAddCardAuthOptions & import('./promisify').PromisifyArgs<my.AddCardAuthSuccessResult, any>
) => Promise<my.AddCardAuthSuccessResult>;
export declare const addPhoneContact: (
  arg?: my.IAddPhoneContactOptions & import('./promisify').PromisifyArgs<my.AddPhoneContactSuccessResult, any>
) => Promise<my.AddPhoneContactSuccessResult>;
export declare const alert: (arg?: my.IAlertOptions & import('./promisify').PromisifyArgs<any, any>) => Promise<any>;
export declare const canIUse: typeof my.canIUse;
export declare const chooseAlipayContact: (
  arg?: my.IChooseAlipayContactOptions &
    import('./promisify').PromisifyArgs<my.IChooseAlipayContactSuccessResult, my.IChooseAlipayContactFailResult>
) => Promise<my.IChooseAlipayContactSuccessResult>;
export declare const chooseCity: (
  arg?: my.IChooseCityOptions & import('./promisify').PromisifyArgs<my.IChooseCitySuccessResult, any>
) => Promise<my.IChooseCitySuccessResult>;
export declare const chooseContact: (
  arg?: my.IChooseContactOptions & import('./promisify').PromisifyArgs<my.IChooseContactSuccessResult, any>
) => Promise<my.IChooseContactSuccessResult>;
export declare const chooseImage: (
  arg?: my.IChooseImageOptions & import('./promisify').PromisifyArgs<my.IChooseImageSuccessResult | undefined, any>
) => Promise<my.IChooseImageSuccessResult | undefined>;
export declare const chooseLocation: (
  arg?: my.IChooseLocationOptions & import('./promisify').PromisifyArgs<my.IChooseLocationResult, any>
) => Promise<my.IChooseLocationResult>;
export declare const choosePhoneContact: (
  arg?: my.IChoosePhoneContactOptions &
    import('./promisify').PromisifyArgs<my.IChoosePhoneContactSuccessResult, my.IChoosePhoneContactFailResult>
) => Promise<my.IChoosePhoneContactSuccessResult>;
export declare const clearStorage: typeof my.clearStorage;
export declare const clearStorageSync: typeof my.clearStorageSync;
export declare const closeBluetoothAdapter: (
  arg?: my.ICloseBluetoothAdapterOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const closeSocket: (
  arg?: my.ICloseSocketOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const compressImage: (
  arg?: my.ICompressImageOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const confirm: (
  arg?: my.IConfirmOptions & import('./promisify').PromisifyArgs<my.IConfirmSuccessResult, my.IConfirmSuccessResult>
) => Promise<my.IConfirmSuccessResult>;
export declare const connectBLEDevice: (
  arg?: my.IConnectBLEDeviceOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const connectSocket: (
  arg?: my.IConnectSocketOptions & import('./promisify').PromisifyArgs<any, my.IConnectFailResult>
) => Promise<any>;
export declare const createAnimation: typeof my.createAnimation;
export declare const createCanvasContext: typeof my.createCanvasContext;
export declare const createIntersectionObserver: any;
export declare const createMapContext: typeof my.createMapContext;
export declare const createSelectorQuery: typeof my.createSelectorQuery;
export declare const createWebViewContext: typeof my.createWebViewContext;
export declare const datePicker: (
  arg?: my.IDatePickerOptions &
    import('./promisify').PromisifyArgs<my.IDatePickerSuccessResult, my.IDatePickerFailResult>
) => Promise<my.IDatePickerSuccessResult>;
export declare const disconnectBLEDevice: (
  arg?: my.IDisconnectBLEDeviceOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const downloadFile: (
  arg?: my.IDownloadFileOptions &
    import('./promisify').PromisifyArgs<my.IDownloadFileSuccessResult | undefined, my.IDownloadFileFailResult>
) => Promise<my.IDownloadFileSuccessResult | undefined>;
export declare const getAuthCode: (
  arg?: my.IGetAuthCodeOptions & import('./promisify').PromisifyArgs<my.IGetAuthCodeSuccessResult, any>
) => Promise<my.IGetAuthCodeSuccessResult>;
export declare const getAuthUserInfo: (
  arg?: my.IGetAuthUserInfoOptions & import('./promisify').PromisifyArgs<my.IGetAuthUserInfoSuccessResult, any>
) => Promise<my.IGetAuthUserInfoSuccessResult>;
export declare const getBatteryInfo: (arg?: any) => Promise<any>;
export declare const getBatteryInfoSync: any;
export declare const getBeacons: (
  arg?: my.IGetBeaconsOptions & import('./promisify').PromisifyArgs<my.IGetBeaconsSuccessResult, any>
) => Promise<my.IGetBeaconsSuccessResult>;
export declare const getBLEDeviceCharacteristics: (
  arg?: my.IGetBLEDeviceCharacteristicsOptions &
    import('./promisify').PromisifyArgs<my.IGetBLEDeviceCharacteristicsSuccessResult, any>
) => Promise<my.IGetBLEDeviceCharacteristicsSuccessResult>;
export declare const getBLEDeviceServices: (
  arg?: my.IGetBLEDeviceServicesOptions &
    import('./promisify').PromisifyArgs<my.IGetBLEDeviceServicesSuccessResult, any>
) => Promise<my.IGetBLEDeviceServicesSuccessResult>;
export declare const getBluetoothAdapterState: (
  arg?: my.IGetBluetoothAdapterStateOptions &
    import('./promisify').PromisifyArgs<my.IGetBluetoothAdapterStateSuccessResult, any>
) => Promise<my.IGetBluetoothAdapterStateSuccessResult>;
export declare const getBluetoothDevices: (
  arg?: my.IGetBluetoothDevicesOptions & import('./promisify').PromisifyArgs<my.IGetBluetoothDevicesSuccessResult, any>
) => Promise<my.IGetBluetoothDevicesSuccessResult>;
export declare const getClipboard: (
  arg?: my.IClipboardOptions & import('./promisify').PromisifyArgs<string, any>
) => Promise<string>;
export declare const getConnectedBluetoothDevices: (
  arg?: my.IGetConnectedBluetoothDevicesOptions &
    import('./promisify').PromisifyArgs<my.IGetConnectedBluetoothDevicesSuccessResult, any>
) => Promise<my.IGetConnectedBluetoothDevicesSuccessResult>;
export declare const getFileInfo: (
  arg?: my.IGetFileInfoOptions & import('./promisify').PromisifyArgs<my.IGetFileInfoSuccessResult, any>
) => Promise<my.IGetFileInfoSuccessResult>;
export declare const getImageInfo: (
  arg?: my.IGetImageInfoOptions & import('./promisify').PromisifyArgs<my.IGetImageInfoSuccessResult | undefined, any>
) => Promise<my.IGetImageInfoSuccessResult | undefined>;
export declare const getLocation: (
  arg?: my.IGetLocationOptions &
    import('./promisify').PromisifyArgs<my.IGetLocationSuccessResult | undefined, my.IGetLocationFailResult>
) => Promise<my.IGetLocationSuccessResult | undefined>;
export declare const getNetworkType: (
  arg?: my.IGetNetworkTypeOptions & import('./promisify').PromisifyArgs<my.IGetNetworkTypeSuccessResult, any>
) => Promise<my.IGetNetworkTypeSuccessResult>;
export declare const getPhoneNumber: (
  arg?: my.IGetPhoneNumberOptions & import('./promisify').PromisifyArgs<my.IGetPhoneNumberSuccessResult, any>
) => Promise<my.IGetPhoneNumberSuccessResult>;
export declare const getRunData: (arg?: any) => Promise<any>;
export declare const getRunScene: (
  arg?: my.IGetRunSceneOptions & import('./promisify').PromisifyArgs<my.IGetRunSceneSuccessResult, any>
) => Promise<my.IGetRunSceneSuccessResult>;
export declare const getSavedFileInfo: (
  arg?: my.IGetSavedFileInfoOptions &
    import('./promisify').PromisifyArgs<my.IGetSavedFileInfoSuccessResult | undefined, any>
) => Promise<my.IGetSavedFileInfoSuccessResult | undefined>;
export declare const getSavedFileList: (
  arg?: my.IGetSavedFileListOptions &
    import('./promisify').PromisifyArgs<my.IGetSavedFileListSuccessResult | undefined, any>
) => Promise<my.IGetSavedFileListSuccessResult | undefined>;
export declare const getScreenBrightness: (
  arg?: my.IGetScreenBrightnessOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const getServerTime: (
  arg?: my.IGetServerTimeOptions & import('./promisify').PromisifyArgs<my.IGetServerTimeSuccessResult, any>
) => Promise<my.IGetServerTimeSuccessResult>;
export declare const getSetting: (
  arg?: my.IGetSettingOptions & import('./promisify').PromisifyArgs<my.IGetSettingSuccessResult, any>
) => Promise<my.IGetSettingSuccessResult>;
export declare const getStorage: (
  arg?: my.IGetStorageOptions & import('./promisify').PromisifyArgs<my.IGetStorageSuccessResult, any>
) => Promise<my.IGetStorageSuccessResult>;
export declare const getStorageInfo: (
  arg?: my.IGetStorageInfoOptions & import('./promisify').PromisifyArgs<my.IStorageInfo, any>
) => Promise<my.IStorageInfo>;
export declare const getStorageInfoSync: typeof my.getStorageInfoSync;
export declare const getStorageSync: typeof my.getStorageSync;
export declare const getSystemInfo: (
  arg?: my.IGetSystemInfoOptions & import('./promisify').PromisifyArgs<my.IGetSystemInfoSuccessResult | undefined, any>
) => Promise<my.IGetSystemInfoSuccessResult | undefined>;
export declare const getSystemInfoSync: typeof my.getSystemInfoSync;
export declare const getTitleColor: (arg?: any) => Promise<any>;
export declare const getUpdateManager: any;
export declare const hideAddToDesktopMenu: typeof my.hideAddToDesktopMenu;
export declare const hideAllAddToDesktopMenu: typeof my.hideAllAddToDesktopMenu;
export declare const hideAllFavoriteMenu: typeof my.hideAllFavoriteMenu;
export declare const hideBackHome: typeof my.hideBackHome;
export declare const hideFavoriteMenu: typeof my.hideFavoriteMenu;
export declare const hideKeyboard: typeof my.hideKeyboard;
export declare const hideLoading: typeof my.hideLoading;
export declare const hideNavigationBarLoading: typeof my.hideNavigationBarLoading;
export declare const hideShareMenu: typeof my.hideShareMenu;
export declare const hideTabBar: typeof my.hideTabBar;
export declare const hideTabBarRedDot: typeof my.hideTabBarRedDot;
export declare const hideToast: typeof my.hideToast;
export declare const loadFontFace: (arg?: any) => Promise<any>;
export declare const makePhoneCall: typeof my.makePhoneCall;
export declare const multiLevelSelect: (
  arg?: my.IMultiLevelSelectOptions & import('./promisify').PromisifyArgs<my.MultiLevelSelectSuccessResult, any>
) => Promise<my.MultiLevelSelectSuccessResult>;
export declare const navigateBack: (
  arg?: my.INavigateBackOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const navigateBackMiniProgram: (
  arg?: my.INavigateBackMiniProgram & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const navigateTo: (
  arg?: my.INavigateToOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const navigateToMiniProgram: (
  arg?: my.INavigateToMiniProgram & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const notifyBLECharacteristicValueChange: (
  arg?: my.INotifyBLECharacteristicValueChangeOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const offAccelerometerChange: typeof my.offAccelerometerChange;
export declare const offBLECharacteristicValueChange: typeof my.offBLECharacteristicValueChange;
export declare const offBLEConnectionStateChanged: typeof my.offBLEConnectionStateChanged;
export declare const offBluetoothAdapterStateChange: typeof my.offBluetoothAdapterStateChange;
export declare const offBluetoothDeviceFound: typeof my.offBluetoothDeviceFound;
export declare const offCompassChange: typeof my.offCompassChange;
export declare const offGyroscopeChange: typeof my.offGyroscopeChange;
export declare const offMemoryWarning: any;
export declare const offNetworkStatusChange: typeof my.offNetworkStatusChange;
export declare const offSocketClose: typeof my.offSocketClose;
export declare const offSocketError: any;
export declare const offSocketMessage: any;
export declare const offSocketOpen: any;
export declare const offUserCaptureScreen: typeof my.offUserCaptureScreen;
export declare const onAccelerometerChange: typeof my.onAccelerometerChange;
export declare const onBeaconServiceChange: typeof my.onBeaconServiceChange;
export declare const onBeaconUpdate: typeof my.onBeaconUpdate;
export declare const onBLECharacteristicValueChange: typeof my.onBLECharacteristicValueChange;
export declare const onBLEConnectionStateChanged: typeof my.onBLEConnectionStateChanged;
export declare const onBluetoothAdapterStateChange: typeof my.onBluetoothAdapterStateChange;
export declare const onBluetoothDeviceFound: typeof my.onBluetoothDeviceFound;
export declare const onCompassChange: typeof my.onCompassChange;
export declare const onGyroscopeChange: typeof my.onGyroscopeChange;
export declare const onMemoryWarning: any;
export declare const onNetworkStatusChange: typeof my.onNetworkStatusChange;
export declare const onSocketClose: typeof my.onSocketClose;
export declare const onSocketError: typeof my.onSocketError;
export declare const onSocketMessage: typeof my.onSocketMessage;
export declare const onSocketOpen: typeof my.onSocketOpen;
export declare const onUserCaptureScreen: typeof my.onUserCaptureScreen;
export declare const openBluetoothAdapter: typeof my.openBluetoothAdapter;
export declare const openCardDetail: typeof my.openCardDetail;
export declare const openCardList: typeof my.openCardList;
export declare const openKBVoucherDetail: typeof my.openKBVoucherDetail;
export declare const openLocation: (
  arg?: my.IOpenLocationOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const openMerchantCardList: typeof my.openMerchantCardList;
export declare const openMerchantTicketList: typeof my.openMerchantTicketList;
export declare const openMerchantVoucherList: typeof my.openMerchantVoucherList;
export declare const openSetting: (
  arg?: my.IOpenSettingOptions & import('./promisify').PromisifyArgs<my.IOpenSettingSuccessOptions, any>
) => Promise<my.IOpenSettingSuccessOptions>;
export declare const openTicketDetail: typeof my.openTicketDetail;
export declare const openTicketList: typeof my.openTicketList;
export declare const openVoucherDetail: typeof my.openVoucherDetail;
export declare const openVoucherList: typeof my.openVoucherList;
export declare const optionsSelect: typeof my.optionsSelect;
export declare const pageScrollTo: (
  arg?: my.IPageScrollToOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const previewImage: (
  arg?: my.IPreviewImageOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const prompt: (
  arg?: my.IPromptOptions & import('./promisify').PromisifyArgs<my.IPromptSuccessResult, any>
) => Promise<my.IPromptSuccessResult>;
export declare const readBLECharacteristicValue: (
  arg?: my.IReadBLECharacteristicValueOptions &
    import('./promisify').PromisifyArgs<my.IReadBLECharacteristicValueSuccessResult, any>
) => Promise<my.IReadBLECharacteristicValueSuccessResult>;
export declare const redirectTo: (
  arg?: my.IRedirectToOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const reLaunch: (
  arg?: my.IRelaunchOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const removeSavedFile: (
  arg?: my.IRemoveSavedFileOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const removeStorage: (
  arg?: my.IRemoveStorageOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const removeStorageSync: typeof my.removeStorageSync;
export declare const removeTabBarBadge: (
  arg?: my.IRemoveTabBarBadgeOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const reportAnalytics: typeof my.reportAnalytics;
export declare const request: (
  arg?: my.IHttpRequestOptions & import('./promisify').PromisifyArgs<my.IHttpRequestSuccessResult, any>
) => Promise<my.IHttpRequestSuccessResult>;
export declare const rsa: (
  arg?: my.IRSAOptions & import('./promisify').PromisifyArgs<my.IRSASuccessResult, my.IRSAFailResult>
) => Promise<my.IRSASuccessResult>;
export declare const saveFile: (
  arg?: my.ISaveFileOptions & import('./promisify').PromisifyArgs<my.ISaveFileSuccessResult | undefined, any>
) => Promise<my.ISaveFileSuccessResult | undefined>;
export declare const saveImage: (
  arg?: my.ISaveImageOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const scan: (
  arg?: my.IScanOptions & import('./promisify').PromisifyArgs<my.IScanSuccessResult, my.IScanFailResult>
) => Promise<my.IScanSuccessResult>;
export declare const SDKVersion: string;
export declare const sendSocketMessage: (
  arg?: my.ISendSocketMessageOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const setBackgroundColor: (arg?: any) => Promise<any>;
export declare const setBackgroundTextStyle: (arg?: any) => Promise<any>;
export declare const setCanPullDown: any;
export declare const setClipboard: (
  arg?: my.IClipboardOptions & {
    text: string;
  } & import('./promisify').PromisifyArgs<string, any>
) => Promise<string>;
export declare const setKeepScreenOn: (
  arg?: my.ISetKeepScreenOnOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const setNavigationBar: (
  arg?: my.ISetNavigationBar & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const setOptionMenu: any;
export declare const setScreenBrightness: (
  arg?: my.ISetScreenBrightnessOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const setStorage: (
  arg?: my.ISetStorageOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const setStorageSync: typeof my.setStorageSync;
export declare const setTabBarBadge: (
  arg?: my.ISetTabBarBadgeOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const setTabBarItem: (
  arg?: my.ISetTabBarItemOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const setTabBarStyle: (
  arg?: my.ISetTabBarStyleOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const showActionSheet: (
  arg?: my.IShowActionSheetOptions & import('./promisify').PromisifyArgs<my.IShowActionSheetSuccessResult, any>
) => Promise<my.IShowActionSheetSuccessResult>;
export declare const showAuthGuide: typeof my.showAuthGuide;
export declare const showLoading: (
  arg?:
    | (string & import('./promisify').PromisifyArgs<any, any>)
    | (my.IShowLoadingOptions & import('./promisify').PromisifyArgs<any, any>)
) => Promise<any>;
export declare const showNavigationBarLoading: (arg?: any) => Promise<any>;
export declare const showSharePanel: any;
export declare const showTabBar: (
  arg?: my.IShowTabBarOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const showTabBarRedDot: (
  arg?: my.IShowTabBarRedDotOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const showToast: (
  arg?: my.IShowToastOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const startBeaconDiscovery: (
  arg?: my.IStartBeaconDiscoveryOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const startBluetoothDevicesDiscovery: (
  arg?: my.IStartBluetoothDevicesDiscoveryOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const startPullDownRefresh: (arg?: any) => Promise<any>;
export declare const startZMVerify: typeof my.startZMVerify;
export declare const stopBeaconDiscovery: (
  arg?: my.IStopBeaconDiscoveryOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const stopBluetoothDevicesDiscovery: (
  arg?: my.IStopBluetoothDevicesDiscoveryOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const stopPullDownRefresh: (arg?: any) => Promise<any>;
export declare const switchTab: (
  arg?: my.ISwitchTabOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const textRiskIdentification: (
  arg?: my.ITextRiskIdentificationOptions &
    import('./promisify').PromisifyArgs<my.ITextRiskIdentificationSuccessResult, my.ITextRiskIdentificationFailResult>
) => Promise<my.ITextRiskIdentificationSuccessResult>;
export declare const tradePay: (
  arg?: my.ITradePayOptions & import('./promisify').PromisifyArgs<my.ITradePaySuccessResult, any>
) => Promise<my.ITradePaySuccessResult>;
export declare const uploadFile: (
  arg?: my.IUploadFileOptions &
    import('./promisify').PromisifyArgs<
      my.IUploadFileSuccessResult | undefined,
      {
        error: 11 | 12 | 13;
      }
    >
) => Promise<my.IUploadFileSuccessResult | undefined>;
export declare const vibrate: (
  arg?: my.IVibrateOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const vibrateLong: (
  arg?: my.IVibrateLongOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const vibrateShort: (
  arg?: my.IVibrateShortOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const watchShake: typeof my.watchShake;
export declare const writeBLECharacteristicValue: (
  arg?: my.IWriteBLECharacteristicValueOptions & import('./promisify').PromisifyArgs<any, any>
) => Promise<any>;
export declare const createVideoContext: typeof my.createVideoContext;
export declare const getOpenUserInfo: (arg?: any) => Promise<any>;
