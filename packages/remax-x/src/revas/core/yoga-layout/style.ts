import type { YogaNode } from 'yoga-layout-wasm/asm';
import { flatten } from '../utils';
import { promise, yoga as Yoga } from './init';

function funcName(key: string) {
  return `set${key[0].toUpperCase()}${key.substr(1)}`;
}

type StyleParams = [string, any?, any?];

function checkAndRun(yoga: any, key: string, ...values: any[]) {
  if (yoga[key]) {
    yoga[key](...values);
  } else {
    throw new Error(`ReCanvas: No Such Style Func - ${key}`);
  }
}

function parseValue(func: string, value: string | number): StyleParams {
  if (typeof value === 'number') {
    return [func, value];
  } else if (value === 'auto') {
    return [`${func}Auto`];
  } else if (value.endsWith('%')) {
    return [`${func}Percent`, Number(value.slice(0, -1))];
  } else {
    throw new Error(`ReCanvas: No Such Style Value - ${value}`);
  }
}

function parseEnum(func: string, enums: any, value: string): StyleParams {
  if (enums[value] !== undefined) {
    return [func, enums[value]];
  } else {
    throw new Error(`ReCanvas: No Such Style Value - ${value}`);
  }
}

function parseEdge(func: string, edge: number, value: string | number): StyleParams {
  if (typeof value === 'number') {
    return [func, edge, value];
  } else if (value === 'auto') {
    return [`${func}Auto`, edge];
  } else if (value.endsWith('%')) {
    return [`${func}Percent`, edge, Number(value.slice(0, -1))];
  } else {
    throw new Error(`ReCanvas: No Such Style Value - ${value}`);
  }
}

const STYLE_MAP: { [key: string]: (value: any) => StyleParams } = {};

function init() {
  const ALIGN_ENUM = {
    auto: Yoga.ALIGN_AUTO,
    baseline: Yoga.ALIGN_BASELINE,
    center: Yoga.ALIGN_CENTER,
    'flex-end': Yoga.ALIGN_FLEX_END,
    'flex-start': Yoga.ALIGN_FLEX_START,
    'space-around': Yoga.ALIGN_SPACE_AROUND,
    'space-between': Yoga.ALIGN_SPACE_BETWEEN,
    stretch: Yoga.ALIGN_STRETCH,
  };

  const AVAILABLE = {
    VALUE: [
      'flex',
      'width',
      'height',
      'minWidth',
      'maxWidth',
      'minHeight',
      'maxHeight',
      'flexGrow',
      'flexShrink',
      'aspectRatio',
    ],
    ENUM: [
      {
        key: 'justifyContent',
        enum: {
          center: Yoga.JUSTIFY_CENTER,
          'flex-end': Yoga.JUSTIFY_FLEX_END,
          'flex-start': Yoga.JUSTIFY_FLEX_START,
          'space-around': Yoga.JUSTIFY_SPACE_AROUND,
          'space-between': Yoga.JUSTIFY_SPACE_BETWEEN,
          'space-evenly': Yoga.JUSTIFY_SPACE_EVENLY,
        },
      },
      { key: 'alignItems', enum: ALIGN_ENUM },
      { key: 'alignSelf', enum: ALIGN_ENUM },
      { key: 'alignContent', enum: ALIGN_ENUM },
      {
        key: 'flexWrap',
        enum: {
          'no-wrap': Yoga.WRAP_NO_WRAP,
          wrap: Yoga.WRAP_WRAP,
          'wrap-reverse': Yoga.WRAP_WRAP_REVERSE,
        },
      },
      {
        key: 'flexDirection',
        enum: {
          column: Yoga.FLEX_DIRECTION_COLUMN,
          'column-reverse': Yoga.FLEX_DIRECTION_COLUMN_REVERSE,
          count: Yoga.FLEX_DIRECTION_COUNT,
          row: Yoga.FLEX_DIRECTION_ROW,
          'row-reverse': Yoga.FLEX_DIRECTION_ROW_REVERSE,
        },
      },
      {
        key: 'position',
        remap: 'positionType',
        enum: {
          relative: Yoga.POSITION_TYPE_RELATIVE,
          absolute: Yoga.POSITION_TYPE_ABSOLUTE,
          count: Yoga.POSITION_TYPE_COUNT,
        },
      },
    ],
    EDGE: [
      { key: 'padding', remap: 'padding', edge: Yoga.EDGE_ALL },
      { key: 'paddingLeft', remap: 'padding', edge: Yoga.EDGE_LEFT },
      { key: 'paddingRight', remap: 'padding', edge: Yoga.EDGE_RIGHT },
      { key: 'paddingTop', remap: 'padding', edge: Yoga.EDGE_TOP },
      { key: 'paddingBottom', remap: 'padding', edge: Yoga.EDGE_BOTTOM },

      { key: 'left', remap: 'position', edge: Yoga.EDGE_LEFT },
      { key: 'right', remap: 'position', edge: Yoga.EDGE_RIGHT },
      { key: 'top', remap: 'position', edge: Yoga.EDGE_TOP },
      { key: 'bottom', remap: 'position', edge: Yoga.EDGE_BOTTOM },

      { key: 'margin', remap: 'margin', edge: Yoga.EDGE_ALL },
      { key: 'marginLeft', remap: 'margin', edge: Yoga.EDGE_LEFT },
      { key: 'marginRight', remap: 'margin', edge: Yoga.EDGE_RIGHT },
      { key: 'marginTop', remap: 'margin', edge: Yoga.EDGE_TOP },
      { key: 'marginBottom', remap: 'margin', edge: Yoga.EDGE_BOTTOM },

      { key: 'borderWidth', remap: 'border', edge: Yoga.EDGE_ALL },
      { key: 'borderLeftWidth', remap: 'border', edge: Yoga.EDGE_LEFT },
      { key: 'borderRightWidth', remap: 'border', edge: Yoga.EDGE_RIGHT },
      { key: 'borderTopWidth', remap: 'border', edge: Yoga.EDGE_TOP },
      { key: 'borderBottomWidth', remap: 'border', edge: Yoga.EDGE_BOTTOM },
    ],
  };

  AVAILABLE.VALUE.forEach(key => {
    const func = funcName(key);
    STYLE_MAP[key] = value => parseValue(func, value);
  });

  AVAILABLE.ENUM.forEach(item => {
    const func = funcName(item.remap || item.key);
    const enums = item.enum;
    STYLE_MAP[item.key] = value => parseEnum(func, enums, value);
  });

  AVAILABLE.EDGE.forEach(item => {
    const func = funcName(item.remap);
    const { edge } = item;
    STYLE_MAP[item.key] = value => parseEdge(func, edge, value);
  });
}

promise.then(init);

// function _apply(yoga: Yoga.YogaNode, style: any) {
//   for (const key in style) {
//     const func = STYLE_MAP[key]
//     func && checkAndRun(yoga, ...func(style[key]))
//   }
// }

const cache = new WeakMap<any, StyleParams[]>();

function _apply(yoga: YogaNode, style: any) {
  if (style) {
    if (!cache.has(style)) {
      const _styles: StyleParams[] = [];
      for (const key in style) {
        const func = STYLE_MAP[key];
        func && _styles.push(func(style[key]));
      }
      cache.set(style, _styles);
    }
    const styles = cache.get(style)!;
    for (let i = 0; i < styles.length; i++) {
      checkAndRun(yoga, ...styles[i]);
    }
  }
}

export default function apply(yoga: YogaNode, style: any) {
  if (style) {
    flatten([style]).forEach(s => _apply(yoga, s));
  }
}
