import * as React from 'react';
import factory from './factory';

export interface MapMarker {
  id?: number;
  latitude: number;
  longitude: number;
  title?: string;
  iconPath: string;
  rotate?: number;
  alpha?: number;
  width?: number;
  height?: number;
  callout?: any;
  anchorX?: number;
  anchorY?: number;
  customCallout?: any;
  iconAppendStr?: string;
  iconAppendStrColor?: string;
  fixedPoint?: any;
  markerLevel?: number;
  label?: any;
  style?: React.CSSProperties;
}

export interface MapPolyline {
  points: {
    latitude: number;
    longitude: number;
  }[];
  color?: string;
  dottedLine?: boolean;
  iconWidth?: number;
  zIndex?: number;
  iconPath?: string;
  colorList?: any[];
  width?: number;
}

export interface MapCircle {
  latitude: number;
  longitude: number;
  color?: string;
  fillColor?: string;
  radius: number;
  strokeWidth?: number;
}

export interface MapPosition {
  left?: number;
  top?: number;
  width?: number;
  height?: number;
}

export interface MapControl {
  id?: number;
  position: MapPosition;
  iconPath: string;
  clickable?: boolean;
}

export interface MapPolygon {
  points: {
    latitude: number;
    longitude: number;
  }[];
  color?: string;
  fillColor?: string;
  width?: number;
}

export interface MapCoordinate {
  latitude?: number;
  longitude?: number;
}

export interface MapSetting {
  // 手势
  gestureEnable?: number;
  // 比例尺
  showScale?: number;
  // 指南针
  showCompass?: number;
  //双手下滑
  tiltGesturesEnabled?: number;
  // 交通路况展示
  trafficEnabled?: number;
  // 地图 POI 信息
  showMapText?: number;
  // 高德地图 logo 位置
  logoPosition?: {
    centerX?: number;
    centerY?: number;
  };
}

export interface Map extends MapCoordinate {
  style?: React.CSSProperties;
  className?: string;
  scale?: number;
  markers?: MapMarker[];
  polyline?: MapPolyline[];
  circles?: MapCircle[];
  controls?: MapControl[];
  polygon?: MapPolygon[];
  showLocation?: boolean;
  includePoints?: Required<MapCoordinate>[];
  includePadding?: { left: number; right: number; top: number; bottom: number };
  groundOverlays?: {
    'include-points': Required<MapCoordinate>[];
    image: string;
    alpha?: number;
    zIndex?: number;
  }[];
  tileOverlay?: {
    url: string;
    type: number;
    tileWidth: number;
    tileHeight: number;
    zIndex?: number;
  }[];
  setting?: MapSetting;
  onMarkerTap?: (e: any) => void;
  onCalloutTap?: (e: any) => void;
  onControlTap?: (e: any) => void;
  onRegionChange?: (e: any) => void;
  onTap?: (e: any) => void;
}
const Map = factory<Map>('map');

export default Map;
