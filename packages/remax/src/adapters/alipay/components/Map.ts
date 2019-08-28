import factory from './factory';
import * as React from 'react';

interface MarkersPprops {
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
  style?: any;
}

interface PolylinePprops {
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

interface CirclesProps {
  latitude: number;
  longitude: number;
  color?: string;
  fillColor?: string;
  radius: number;
  strokeWidth?: number;
}

interface PositionProps {
  left?: number;
  top?: number;
  width?: number;
  height?: number;
}

interface ControlsProps {
  id?: number;
  position: PositionProps;
  iconPath: string;
  clickable?: boolean;
}

interface PolygonProps {
  points: {
    latitude: number;
    longitude: number;
  }[];
  color?: string;
  fillColor?: string;
  width?: number;
}

export interface Map {
  style?: React.CSSProperties;
  class?: string;
  latitude?: number;
  longitude?: string;
  scale?: number;
  markers?: MarkersPprops[];
  polyline?: PolylinePprops[];
  circles?: CirclesProps[];
  controls?: ControlsProps[];
  polygon?: PolygonProps[];
  showLocation?: boolean;
  includePoints?: {
    latitude: number;
    longitude: number;
  }[];
  includePadding?: { left: number; right: number; top: number; bottom: number };
  groundOverlays?: any[];
  tileOverlay?: any;
  setting?: any;
  onMarkerTap?: (e: any) => void;
  onCalloutTap?: (e: any) => void;
  onControlTap?: (e: any) => void;
  onRegionChange?: (e: any) => void;
  onTap?: (e: any) => void;
}
const Map = factory<Map>('map');

export default Map;
