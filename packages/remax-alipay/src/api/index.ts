import promisify from './promisify';

export const getAppStub = getApp;

export const addCardAuth = promisify(my.addCardAuth);
export const addPhoneContact = promisify(my.addPhoneContact);
export const alert = promisify(my.alert);
export const canIUse = my.canIUse;
export const chooseAlipayContact = promisify(my.chooseAlipayContact);
export const chooseCity = promisify(my.chooseCity);
export const chooseContact = promisify(my.chooseContact);
export const chooseImage = promisify(my.chooseImage);
export const chooseLocation = promisify(my.chooseLocation);
export const choosePhoneContact = promisify(my.choosePhoneContact);
export const clearStorage = my.clearStorage;
export const clearStorageSync = my.clearStorageSync;
export const closeBluetoothAdapter = promisify(my.closeBluetoothAdapter);
export const closeSocket = promisify(my.closeSocket);
export const compressImage = promisify(my.compressImage);
export const confirm = promisify(my.confirm);
export const connectBLEDevice = promisify(my.connectBLEDevice);
export const connectSocket = promisify(my.connectSocket);
export const createAnimation = my.createAnimation;
export const createCanvasContext = my.createCanvasContext;
export const createIntersectionObserver = (my as any)
  .createIntersectionObserver;
export const createMapContext = my.createMapContext;
export const createSelectorQuery = my.createSelectorQuery;
export const createWebViewContext = my.createWebViewContext;
export const datePicker = promisify(my.datePicker);
export const disconnectBLEDevice = promisify(my.disconnectBLEDevice);
export const downloadFile = promisify(my.downloadFile);
export const getAuthCode = promisify(my.getAuthCode);
export const getAuthUserInfo = promisify(my.getAuthUserInfo);
export const getBatteryInfo = promisify((my as any).getBatteryInfo);
export const getBatteryInfoSync = (my as any).getBatteryInfoSync;
export const getBeacons = promisify(my.getBeacons);
export const getBLEDeviceCharacteristics = promisify(
  my.getBLEDeviceCharacteristics
);
export const getBLEDeviceServices = promisify(my.getBLEDeviceServices);
export const getBluetoothAdapterState = promisify(my.getBluetoothAdapterState);
export const getBluetoothDevices = promisify(my.getBluetoothDevices);
export const getClipboard = promisify(my.getClipboard);
export const getConnectedBluetoothDevices = promisify(
  my.getConnectedBluetoothDevices
);
export const getFileInfo = promisify(my.getFileInfo);
export const getImageInfo = promisify(my.getImageInfo);
export const getLocation = promisify(my.getLocation);
export const getNetworkType = promisify(my.getNetworkType);
export const getPhoneNumber = promisify(my.getPhoneNumber);
export const getRunData = promisify((my as any).getRunData);
export const getRunScene = promisify(my.getRunScene);
export const getSavedFileInfo = promisify(my.getSavedFileInfo);
export const getSavedFileList = promisify(my.getSavedFileList);
export const getScreenBrightness = promisify(my.getScreenBrightness);
export const getServerTime = promisify(my.getServerTime);
export const getSetting = promisify(my.getSetting);
export const getStorage = promisify(my.getStorage);
export const getStorageInfo = promisify(my.getStorageInfo);
export const getStorageInfoSync = my.getStorageInfoSync;
export const getStorageSync = my.getStorageSync;
export const getSystemInfo = promisify(my.getSystemInfo);
export const getSystemInfoSync = my.getSystemInfoSync;
export const getTitleColor = promisify((my as any).getTitleColor);
export const getUpdateManager = (my as any).getUpdateManager;
export const hideAddToDesktopMenu = my.hideAddToDesktopMenu;
export const hideAllAddToDesktopMenu = my.hideAllAddToDesktopMenu;
export const hideAllFavoriteMenu = my.hideAllFavoriteMenu;
export const hideBackHome = my.hideBackHome;
export const hideFavoriteMenu = my.hideFavoriteMenu;
export const hideKeyboard = my.hideKeyboard;
export const hideLoading = my.hideLoading;
export const hideNavigationBarLoading = my.hideNavigationBarLoading;
export const hideShareMenu = my.hideShareMenu;
export const hideTabBar = my.hideTabBar;
export const hideTabBarRedDot = my.hideTabBarRedDot;
export const hideToast = my.hideToast;
export const loadFontFace = promisify((my as any).loadFontFace);
export const makePhoneCall = my.makePhoneCall;
export const multiLevelSelect = promisify(my.multiLevelSelect);
export const navigateBack = promisify(my.navigateBack);
export const navigateBackMiniProgram = promisify(my.navigateBackMiniProgram);
export const navigateTo = promisify(my.navigateTo);
export const navigateToMiniProgram = promisify(my.navigateToMiniProgram);
export const notifyBLECharacteristicValueChange = promisify(
  my.notifyBLECharacteristicValueChange
);
export const offAccelerometerChange = my.offAccelerometerChange;
export const offBLECharacteristicValueChange =
  my.offBLECharacteristicValueChange;
export const offBLEConnectionStateChanged = my.offBLEConnectionStateChanged;
export const offBluetoothAdapterStateChange = my.offBluetoothAdapterStateChange;
export const offBluetoothDeviceFound = my.offBluetoothDeviceFound;
export const offCompassChange = my.offCompassChange;
export const offGyroscopeChange = my.offGyroscopeChange;
export const offMemoryWarning = (my as any).offMemoryWarning;
export const offNetworkStatusChange = my.offNetworkStatusChange;
export const offSocketClose = my.offSocketClose;
export const offSocketError = (my as any).offSocketError;
export const offSocketMessage = (my as any).offSocketMessage;
export const offSocketOpen = (my as any).offSocketOpen;
export const offUserCaptureScreen = my.offUserCaptureScreen;
export const onAccelerometerChange = my.onAccelerometerChange;
export const onBeaconServiceChange = my.onBeaconServiceChange;
export const onBeaconUpdate = my.onBeaconUpdate;
export const onBLECharacteristicValueChange = my.onBLECharacteristicValueChange;
export const onBLEConnectionStateChanged = my.onBLEConnectionStateChanged;
export const onBluetoothAdapterStateChange = my.onBluetoothAdapterStateChange;
export const onBluetoothDeviceFound = my.onBluetoothDeviceFound;
export const onCompassChange = my.onCompassChange;
export const onGyroscopeChange = my.onGyroscopeChange;
export const onMemoryWarning = (my as any).onMemoryWarning;
export const onNetworkStatusChange = my.onNetworkStatusChange;
export const onSocketClose = my.onSocketClose;
export const onSocketError = my.onSocketError;
export const onSocketMessage = my.onSocketMessage;
export const onSocketOpen = my.onSocketOpen;
export const onUserCaptureScreen = my.onUserCaptureScreen;
export const openBluetoothAdapter = my.openBluetoothAdapter;
export const openCardDetail = my.openCardDetail;
export const openCardList = my.openCardList;
export const openKBVoucherDetail = my.openKBVoucherDetail;
export const openLocation = promisify(my.openLocation);
export const openMerchantCardList = my.openMerchantCardList;
export const openMerchantTicketList = my.openMerchantTicketList;
export const openMerchantVoucherList = my.openMerchantVoucherList;
export const openSetting = promisify(my.openSetting);
export const openTicketDetail = my.openTicketDetail;
export const openTicketList = my.openTicketList;
export const openVoucherDetail = my.openVoucherDetail;
export const openVoucherList = my.openVoucherList;
export const optionsSelect = my.optionsSelect;
export const pageScrollTo = promisify(my.pageScrollTo);
export const previewImage = promisify(my.previewImage);
export const prompt = promisify(my.prompt);
export const readBLECharacteristicValue = promisify(
  my.readBLECharacteristicValue
);
export const redirectTo = promisify(my.redirectTo);
export const reLaunch = promisify(my.reLaunch);
export const removeSavedFile = promisify(my.removeSavedFile);
export const removeStorage = promisify(my.removeStorage);
export const removeStorageSync = my.removeStorageSync;
export const removeTabBarBadge = promisify(my.removeTabBarBadge);
export const reportAnalytics = my.reportAnalytics;
export const request = promisify(my.request);
export const rsa = promisify(my.rsa);
export const saveFile = promisify(my.saveFile);
export const saveImage = promisify(my.saveImage);
export const scan = promisify(my.scan);
export const SDKVersion = my.SDKVersion;
export const sendSocketMessage = promisify(my.sendSocketMessage);
export const setBackgroundColor = promisify((my as any).setBackgroundColor);
export const setBackgroundTextStyle = promisify(
  (my as any).setBackgroundTextStyle
);
export const setCanPullDown = (my as any).setCanPullDown;
export const setClipboard = promisify(my.setClipboard);
export const setKeepScreenOn = promisify(my.setKeepScreenOn);
export const setNavigationBar = promisify(my.setNavigationBar);
export const setOptionMenu = (my as any).setOptionMenu;
export const setScreenBrightness = promisify(my.setScreenBrightness);
export const setStorage = promisify(my.setStorage);
export const setStorageSync = my.setStorageSync;
export const setTabBarBadge = promisify(my.setTabBarBadge);
export const setTabBarItem = promisify(my.setTabBarItem);
export const setTabBarStyle = promisify(my.setTabBarStyle);
export const showActionSheet = promisify(my.showActionSheet);
export const showAuthGuide = my.showAuthGuide;
export const showLoading = promisify(my.showLoading);
export const showNavigationBarLoading = promisify(my.showNavigationBarLoading);
export const showSharePanel = (my as any).showSharePanel;
export const showTabBar = promisify(my.showTabBar);
export const showTabBarRedDot = promisify(my.showTabBarRedDot);
export const showToast = promisify(my.showToast);
export const startBeaconDiscovery = promisify(my.startBeaconDiscovery);
export const startBluetoothDevicesDiscovery = promisify(
  my.startBluetoothDevicesDiscovery
);
export const startPullDownRefresh = promisify(my.startPullDownRefresh);
export const startZMVerify = my.startZMVerify;
export const stopBeaconDiscovery = promisify(my.stopBeaconDiscovery);
export const stopBluetoothDevicesDiscovery = promisify(
  my.stopBluetoothDevicesDiscovery
);
export const stopPullDownRefresh = promisify(my.stopPullDownRefresh);
export const switchTab = promisify(my.switchTab);
export const textRiskIdentification = promisify(my.textRiskIdentification);
export const tradePay = promisify(my.tradePay);
export const uploadFile = promisify(my.uploadFile);
export const vibrate = promisify(my.vibrate);
export const vibrateLong = promisify(my.vibrateLong);
export const vibrateShort = promisify(my.vibrateShort);
export const watchShake = my.watchShake;
export const writeBLECharacteristicValue = promisify(
  my.writeBLECharacteristicValue
);
export const createVideoContext = my.createVideoContext;
export const getOpenUserInfo = promisify((my as any).getOpenUserInfo);
