import factory from './factory';

const Map = factory<MapProps>('map');

export interface MapProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  longitude: number; //  是 中心经度 1.0.0
  latitude: number; //  是 中心纬度 1.0.0
  scale?: number; // 16 否 缩放级别，取值范围为3-20 1.0.0
  markers?: any[]; //  否 标记点 1.0.0
  covers?: any[]; //  否 即将移除，请使用 markers 1.0.0
  polyline?: any[]; //  否 路线 1.0.0
  circles?: any[]; //  否 圆 1.0.0
  controls?: any[]; //  否 控件（即将废弃，建议使用 cover-view 代替） 1.0.0
  includePoints?: any[]; //  否 缩放视野以包含所有给定的坐标点 1.0.0
  showLocation?: boolean; // false 否 显示带有方向的当前定位点 1.0.0
  polygons?: any[]; //  否 多边形 2.3.0
  subkey?: string; //  否 个性化地图使用的key 2.3.0
  layerStyle?: number; // 1 否 个性化地图配置的 style，不支持动态修改
  rotate?: number; // 0 否 旋转角度，范围 0 ~ 360, 地图正北和设备 y 轴角度的夹角 2.5.0
  skew?: number; // 0 否 倾斜角度，范围 0 ~ 40 , 关于 z 轴的倾角 2.5.0
  enable3D?: boolean; // false 否 展示3D楼块(工具暂不支持） 2.3.0
  showCompass?: boolean; // false 否 显示指南针 2.3.0
  showScale?: boolean; // false 否 显示比例尺，工具暂不支持 2.8.0
  enableOverlooking?: boolean; // false 否 开启俯视 2.3.0
  enableZoom?: boolean; // true 否 是否支持缩放 2.3.0
  enableScroll?: boolean; // true 否 是否支持拖动 2.3.0
  enableRotate?: boolean; // false 否 是否支持旋转 2.3.0
  enableSatellite?: boolean; // false 否 是否开启卫星图 2.7.0
  enableTraffic?: boolean; // false 否 是否开启实时路况 2.7.0
  onClick?: (event: any) => any; //  否 点击地图时触发 1.0.0
  onMarkerClick?: (event: any) => any; //  否 点击标记点时触发，e.detail = {markerId} 1.0.0
  onControlClick?: (event: any) => any; //  否 点击控件时触发，e.detail = {controlId} 1.0.0
  onCalloutClick?: (event: any) => any; //  否 点击标记点对应的气泡时触发e.detail = {markerId} 1.2.0
  onUpdated?: (event: any) => any; //  否 在地图渲染更新完成时触发 1.6.0
  onRegionChange?: (event: any) => any; //  否 视野发生变化时触发， 2.3.0
  onPoiTap?: (event: any) => any; //  否 点击地图poi点时触发，e.detail = {name, longitude, latitude} 2.3.0
}

export default Map;
