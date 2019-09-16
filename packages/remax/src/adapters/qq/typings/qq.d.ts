/// <reference path="../../../../node_modules/miniprogram-api-typings/index.d.ts" />

// 由于 WeChat 和 QQ 小程序的 API 具有高度一致性，这里将会扩展部分 QQ 所特有的 API
// 同时，删除暂时没有的 API
declare namespace QQMiniprogram {
  interface Qq {
    getGroupInfo(option?: any): void;

    setOfficialDress(option: any): void;

    setCustomDress(option: any): void;

    getQQRunData(option?: any): void;

    // TODO: QQ 还没有实现
    requestMidasPayment(): void;

    saveAppToDesktop(option?: any): void;

    openGroupNotice(option: any): void;

    openGroupRemind(option: any): void;

    openQzonePublish(option: any): void;

    createAppBox(option?: any): void;
  }
}

declare const qq: Omit<
  WechatMiniprogram.Wx & QQMiniprogram.Qq,
  'getExtConfigSync' | 'getExtConfig'
>;
