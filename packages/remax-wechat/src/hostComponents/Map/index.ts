import * as React from 'react';
import { createHostComponent } from '@remax/runtime';
import { BaseProps, GenericEvent } from '../../types/component';

export interface MapProps extends BaseProps {
  /** 中心经度 1.0.0 */
  longitude: number;
  /** 中心纬度 1.0.0 */
  latitude: number;
  /** (default: 16) 缩放级别，取值范围为3-20 1.0.0 */
  scale?: number;
  /** (default: 3) 最小缩放级别 2.13.0 */
  minScale?: number;
  /** (default: 20) 最大缩放级别 2.13.0 */
  maxScale?: number;
  /** 标记点 1.0.0 */
  markers?: any[];
  /** 即将移除，请使用 markers 1.0.0 */
  covers?: any[];
  /** 路线 1.0.0 */
  polyline?: any[];
  /** 圆 1.0.0 */
  circles?: any[];
  /** 控件（即将废弃，建议使用 cover-view 代替） 1.0.0 */
  controls?: any[];
  /** 缩放视野以包含所有给定的坐标点 1.0.0 */
  includePoints?: any[];
  /** (default: false) 显示带有方向的当前定位点 1.0.0 */
  showLocation?: boolean;
  /** 多边形 2.3.0 */
  polygons?: any[];
  /** 个性化地图使用的key 2.3.0 */
  subkey?: string;
  /** (default: 1) 个性化地图配置的 style，不支持动态修改 */
  layerStyle?: number;
  /** (default: 0) 旋转角度，范围 0 ~ 360, 地图正北和设备 y 轴角度的夹角 2.5.0 */
  rotate?: number;
  /** (default: 0) 倾斜角度，范围 0 ~ 40 , 关于 z 轴的倾角 2.5.0 */
  skew?: number;
  /** (default: false) 展示3D楼块(工具暂不支持） 2.3.0 */
  enable3D?: boolean;
  /** (default: false) 显示指南针 2.3.0 */
  showCompass?: boolean;
  /** (default: false) 显示比例尺，工具暂不支持 2.8.0 */
  showScale?: boolean;
  /** (default: false) 开启俯视 2.3.0 */
  enableOverlooking?: boolean;
  /** (default: true) 是否支持缩放 2.3.0 */
  enableZoom?: boolean;
  /** (default: true) 是否支持拖动 2.3.0 */
  enableScroll?: boolean;
  /** (default: false) 是否支持旋转 2.3.0 */
  enableRotate?: boolean;
  /** (default: false) 是否开启卫星图 2.7.0 */
  enableSatellite?: boolean;
  /** (default: false) 是否开启实时路况 2.7.0 */
  enableTraffic?: boolean;
  /** (default: false) 是否展示 POI 点 2.14.0 */
  enablePoi?: boolean;
  /** (default: false) 是否展示建筑物 2.14.0 */
  enableBuilding?: boolean;
  /** 配置项 2.8.2 */
  setting?: any;
  /** 点击标记点时触发，e.detail = {markerId} 1.0.0 */
  onMarkerClick?: (event: GenericEvent) => any;
  /** 点击控件时触发，e.detail = {controlId} 1.0.0 */
  onControlClick?: (event: GenericEvent) => any;
  /** 点击标记点对应的气泡时触发e.detail = {markerId} 1.2.0 */
  onCalloutClick?: (event: GenericEvent) => any;
  /** 在地图渲染更新完成时触发 1.6.0 */
  onUpdated?: (event: GenericEvent) => any;
  /** 视野发生变化时触发， 2.3.0 */
  onRegionChange?: (event: GenericEvent) => any;
  /** 点击地图poi点时触发，e.detail = {name, longitude, latitude} 2.3.0 */
  onPoiTap?: (event: GenericEvent) => any;
  /** 点击定位标时触发，e.detail = {longitude, latitude} 2.13.0 */
  onAnchorPointTap?: (event: GenericEvent) => any;
}
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/map.html
 */
export const Map: React.ComponentType<MapProps> = createHostComponent<MapProps>('map');

Map.defaultProps = {
  scale: 16,
  minScale: 3,
  maxScale: 20,
  showLocation: false,
  layerStyle: 1,
  rotate: 0,
  enable3D: false,
  showCompass: false,
  showScale: false,
  enableOverlooking: false,
  enableZoom: true,
  enableScroll: true,
  enableRotate: false,
  enableSatellite: false,
  enableTraffic: false,
  setting: {},
};
