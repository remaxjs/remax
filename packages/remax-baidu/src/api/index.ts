import promisify from './promisify';

declare const swan: any;

export const getAppStub = getApp;

export const onPageNotFound = swan.onPageNotFound;
export const onError = swan.onError;
export const onAppShow = swan.onAppShow;
export const onAppHide = swan.onAppHide;
export const offPageNotFound = swan.offPageNotFound;
export const offError = swan.offError;
export const offAppShow = swan.offAppShow;
export const offAppHide = swan.offAppHide;
export const getURLQuery = swan.getURLQuery;
export const setURLQuery = swan.setURLQuery;
export const request = promisify(swan.request);
export const uploadFile = promisify(swan.uploadFile);
export const downloadFile = promisify(swan.downloadFile);
export const connectSocket = promisify(swan.connectSocket);
export const onSocketOpen = swan.onSocketOpen;
export const onSocketError = swan.onSocketError;
export const sendSocketMessage = promisify(swan.sendSocketMessage);
export const onSocketMessage = swan.onSocketMessage;
export const closeSocket = promisify(swan.closeSocket);
export const onSocketClose = swan.onSocketClose;
export const chooseImage = promisify(swan.chooseImage);
export const previewImage = promisify(swan.previewImage);
export const getImageInfo = promisify(swan.getImageInfo);
export const compressImage = promisify(swan.compressImage);
export const saveImageToPhotosAlbum = promisify(swan.saveImageToPhotosAlbum);
export const chooseAlbum = promisify(swan.chooseAlbum);
export const getRecorderManager = swan.getRecorderManager;
export const getAvailableAudioSources = swan.getAvailableAudioSources;
export const getBackgroundAudioManager = swan.getBackgroundAudioManager;
export const createInnerAudioContext = swan.createInnerAudioContext;
export const setInnerAudioOption = promisify(swan.setInnerAudioOption);
export const chooseVideo = promisify(swan.chooseVideo);
export const saveVideoToPhotosAlbum = promisify(swan.saveVideoToPhotosAlbum);
export const createVideoContext = swan.createVideoContext;
export const createAnimationVideo = swan.createAnimationVideo;
export const createLivePlayerContext = swan.createLivePlayerContext;
export const createCameraContext = swan.createCameraContext;
export const createARCameraContext = swan.createARCameraContext;
export const saveFile = promisify(swan.saveFile);
export const getFileInfo = promisify(swan.getFileInfo);
export const getSavedFileList = promisify(swan.getSavedFileList);
export const getSavedFileInfo = promisify(swan.getSavedFileInfo);
export const removeSavedFile = promisify(swan.removeSavedFile);
export const openDocument = promisify(swan.openDocument);
export const setStorage = promisify(swan.setStorage);
export const setStorageSync = swan.setStorageSync;
export const getStorage = promisify(swan.getStorage);
export const getStorageSync = swan.getStorageSync;
export const getStorageInfo = promisify(swan.getStorageInfo);
export const getStorageInfoSync = swan.getStorageInfoSync;
export const removeStorage = promisify(swan.removeStorage);
export const removeStorageSync = swan.removeStorageSync;
export const clearStorage = promisify(swan.clearStorage);
export const clearStorageSync = swan.clearStorageSync;
export const getLocation = promisify(swan.getLocation);
export const chooseLocation = promisify(swan.chooseLocation);
export const startLocationUpdate = promisify(swan.startLocationUpdate);
export const onLocationChange = swan.onLocationChange;
export const offLocationChange = swan.offLocationChange;
export const stopLocationUpdate = promisify(swan.stopLocationUpdate);
export const openLocation = promisify(swan.openLocation);
export const createMapContext = swan.createMapContext;
export const createCanvasContext = swan.createCanvasContext;
export const canvasGetImageData = promisify(swan.canvasGetImageData);
export const canvasPutImageData = promisify(swan.canvasPutImageData);
export const canvasToTempFilePath = promisify(swan.canvasToTempFilePath);
export const showToast = promisify(swan.showToast);
export const showLoading = promisify(swan.showLoading);
export const hideToast = promisify(swan.hideToast);
export const hideLoading = promisify(swan.hideLoading);
export const showModal = promisify(swan.showModal);
export const showActionSheet = promisify(swan.showActionSheet);
export const setNavigationBarTitle = promisify(swan.setNavigationBarTitle);
export const showNavigationBarLoading = promisify(
  swan.showNavigationBarLoading
);
export const hideNavigationBarLoading = promisify(
  swan.hideNavigationBarLoading
);
export const setNavigationBarColor = promisify(swan.setNavigationBarColor);
export const setTabBarBadge = promisify(swan.setTabBarBadge);
export const removeTabBarBadge = promisify(swan.removeTabBarBadge);
export const showTabBarRedDot = promisify(swan.showTabBarRedDot);
export const hideTabBarRedDot = promisify(swan.hideTabBarRedDot);
export const setTabBarStyle = promisify(swan.setTabBarStyle);
export const setTabBarItem = promisify(swan.setTabBarItem);
export const showTabBar = promisify(swan.showTabBar);
export const hideTabBar = promisify(swan.hideTabBar);
export const navigateTo = promisify(swan.navigateTo);
export const redirectTo = promisify(swan.redirectTo);
export const switchTab = promisify(swan.switchTab);
export const navigateBack = promisify(swan.navigateBack);
export const reLaunch = promisify(swan.reLaunch);
export const createAnimation = swan.createAnimation;
export const pageScrollTo = promisify(swan.pageScrollTo);
export const setBackgroundColor = promisify(swan.setBackgroundColor);
export const setBackgroundTextStyle = promisify(swan.setBackgroundTextStyle);
export const startPullDownRefresh = promisify(swan.startPullDownRefresh);
export const stopPullDownRefresh = promisify(swan.stopPullDownRefresh);
export const nextTick = swan.nextTick;
export const getMenuButtonBoundingClientRect =
  swan.getMenuButtonBoundingClientRect;
export const createIntersectionObserver = swan.createIntersectionObserver;
export const createSelectorQuery = swan.createSelectorQuery;
export const showFavoriteGuide = promisify(swan.showFavoriteGuide);
export const getSystemInfo = promisify(swan.getSystemInfo);
export const getSystemInfoSync = promisify(swan.getSystemInfoSync);
export const getEnvInfoSync = promisify(swan.getEnvInfoSync);
export const canIUse = swan.canIUse;
export const onMemoryWarning = swan.onMemoryWarning;
export const getNetworkType = promisify(swan.getNetworkType);
export const onNetworkStatusChange = swan.onNetworkStatusChange;
export const onAccelerometerChange = swan.onAccelerometerChange;
export const startAccelerometer = promisify(swan.startAccelerometer);
export const stopAccelerometer = promisify(swan.stopAccelerometer);
export const onCompassChange = swan.onCompassChange;
export const startCompass = promisify(swan.startCompass);
export const stopCompass = promisify(swan.stopCompass);
export const onDeviceMotionChange = swan.onDeviceMotionChange;
export const startDeviceMotionListening = promisify(
  swan.startDeviceMotionListening
);
export const stopDeviceMotionListening = promisify(
  swan.stopDeviceMotionListening
);
export const getBatteryInfo = promisify(swan.getBatteryInfo);
export const getBatteryInfoSync = swan.getBatteryInfoSync;
export const scanCode = promisify(swan.scanCode);
export const setScreenBrightness = promisify(swan.setScreenBrightness);
export const getScreenBrightness = promisify(swan.getScreenBrightness);
export const setKeepScreenOn = promisify(swan.setKeepScreenOn);
export const onUserCaptureScreen = swan.onUserCaptureScreen;
export const vibrateLong = promisify(swan.vibrateLong);
export const vibrateShort = promisify(swan.vibrateShort);
export const addPhoneContact = promisify(swan.addPhoneContact);
export const makePhoneCall = promisify(swan.makePhoneCall);
export const setClipboardData = promisify(swan.setClipboardData);
export const getClipboardData = promisify(swan.getClipboardData);
export const addEventOnCalendar = promisify(swan.addEventOnCalendar);
export const deleteEventOnCalendar = promisify(swan.deleteEventOnCalendar);
export const getExtConfig = promisify(swan.getExtConfig);
export const getExtConfigSync = swan.getExtConfigSync;
export const login = promisify(swan.login);
export const checkSession = promisify(swan.checkSession);
export const isLoginSync = swan.isLoginSync;
export const authorize = promisify(swan.authorize);
export const getSwanId = promisify(swan.getSwanId);
export const getUserInfo = promisify(swan.getUserInfo);
export const openSetting = promisify(swan.openSetting);
export const getSetting = promisify(swan.getSetting);
export const openShare = promisify(swan.openShare);
export const shareFile = promisify(swan.shareFile);
export const chooseAddress = promisify(swan.chooseAddress);
export const requestPolymerPayment = promisify(swan.requestPolymerPayment);
export const openCommunityEditor = promisify(swan.openCommunityEditor);
export const closeCommunityEditor = promisify(swan.closeCommunityEditor);
export const openReplyEditor = promisify(swan.openReplyEditor);
export const closeReplyEditor = promisify(swan.closeReplyEditor);
export const chooseInvoiceTitle = promisify(swan.chooseInvoiceTitle);
export const navigateToSmartProgram = promisify(swan.navigateToSmartProgram);
export const navigateBackSmartProgram = promisify(
  swan.navigateBackSmartProgram
);
export const setPageInfo = promisify(swan.setPageInfo);
export const loadSubPackage = promisify(swan.loadSubPackage);
export const getUpdateManager = swan.getUpdateManager;
export const setEnableDebug = promisify(swan.setEnableDebug);
export const reportAnalytics = swan.reportAnalytics;
export const clearInterval = swan.clearInterval;
export const clearTimeout = swan.clearTimeout;
export const setInterval = swan.setInterval;
export const setTimeout = swan.setTimeout;
export const getSystemRiskInfo = promisify(swan.getSystemRiskInfo);
export const subscribeService = promisify(swan.subscribeService);

export const ai = {
  ocrIdCard: promisify(swan.ai.ocrIdCard),
  ocrBankCard: promisify(swan.ai.ocrBankCard),
  ocrDrivingLicense: promisify(swan.ai.ocrDrivingLicense),
  ocrVehicleLicense: promisify(swan.ai.ocrVehicleLicense),
  textReview: promisify(swan.ai.textReview),
  textToAudio: promisify(swan.ai.textToAudio),
  imageAudit: promisify(swan.ai.imageAudit),
  advancedGeneralIdentify: promisify(swan.ai.advancedGeneralIdentify),
  objectDetectIdentify: promisify(swan.ai.objectDetectIdentify),
  carClassify: promisify(swan.ai.carClassify),
  dishClassify: promisify(swan.ai.dishClassify),
  logoClassify: promisify(swan.ai.logoClassify),
  animalClassify: promisify(swan.ai.animalClassify),
  plantClassify: promisify(swan.ai.plantClassify),
  getVoiceRecognizer: swan.ai.getVoiceRecognizer,
  faceDetect: promisify(swan.ai.faceDetect),
  faceMatch: promisify(swan.ai.faceMatch),
  faceSearch: promisify(swan.ai.faceSearch),
  facePersonVerify: promisify(swan.ai.facePersonVerify),
  facePersonIdmatch: promisify(swan.ai.facePersonIdmatch),
  faceLivenessSessioncode: promisify(swan.ai.faceLivenessSessioncode),
  nlpLexerCustom: promisify(swan.ai.nlpLexerCustom),
};
