import { includes } from '@remax/framework-shared';
const STYLE = ['style', 'placeholderStyle'];
const CHILDREN = 'children';
const CLASS_NAME = 'className';

export default function diffProperties(
  lastRawProps: Record<string, any> | null | undefined,
  nextRawProps: Record<string, any> | null | undefined
): null | any[] {
  const updatePayload: any[] = [];

  const lastProps: any = lastRawProps;
  const nextProps: any = nextRawProps;

  let propKey: string;
  let styleName: string;

  const hasOwnProperty = Object.prototype.hasOwnProperty;

  const styleUpdates: Record<string, Record<string, any>> = {};

  for (propKey in lastProps) {
    if (
      hasOwnProperty.call(nextProps, propKey) ||
      !hasOwnProperty.call(lastProps, propKey) ||
      lastProps[propKey] == null
    ) {
      continue;
    }
    if (includes(STYLE, propKey)) {
      const lastStyle = lastProps[propKey];
      for (styleName in lastStyle) {
        if (hasOwnProperty.call(lastStyle, styleName)) {
          if (!styleUpdates[propKey]) {
            styleUpdates[propKey] = {};
          }
          styleUpdates[propKey][styleName] = '';
        }
      }
    } else {
      // For all other deleted properties we add it to the queue. We use
      // the whitelist in the commit phase instead.
      updatePayload.push(propKey, propKey === CLASS_NAME ? '' : null);
    }
  }

  for (propKey in nextProps) {
    const nextProp = nextProps[propKey];
    const lastProp = lastProps != null ? lastProps[propKey] : undefined;
    if (!hasOwnProperty.call(nextProps, propKey) || nextProp === lastProp || (nextProp == null && lastProp == null)) {
      continue;
    }
    if (includes(STYLE, propKey)) {
      if (process.env.NODE_ENV === 'development') {
        if (nextProp) {
          // Freeze the next style object so that we can assume it won't be
          // mutated. We have already warned for this in the past.
          Object.freeze(nextProp);
        }
      }
      if (lastProp) {
        // Unset styles on `lastProp` but not on `nextProp`.
        for (styleName in lastProp) {
          if (hasOwnProperty.call(lastProp, styleName) && (!nextProp || !hasOwnProperty.call(nextProp, styleName))) {
            if (!styleUpdates[propKey]) {
              styleUpdates[propKey] = {};
            }
            styleUpdates[propKey][styleName] = '';
          }
        }
        // Update styles that changed since `lastProp`.
        for (styleName in nextProp) {
          if (hasOwnProperty.call(nextProp, styleName) && lastProp[styleName] !== nextProp[styleName]) {
            if (!styleUpdates[propKey]) {
              styleUpdates[propKey] = {};
            }
            styleUpdates[propKey][styleName] = nextProp[styleName];
          }
        }
      } else {
        // Relies on `updateStylesByID` not mutating `styleUpdates`.
        if (!styleUpdates[propKey]) {
          updatePayload.push(propKey, null);
        }
        styleUpdates[propKey] = nextProp;
      }
    } else if (propKey === CHILDREN) {
      if (lastProp !== nextProp && (typeof nextProp === 'string' || typeof nextProp === 'number')) {
        updatePayload.push(propKey, '' + nextProp);
      }
    } else {
      // For any other property we always add it to the queue and then we
      // filter it out using the whitelist during the commit.
      updatePayload.push(propKey, nextProp);
    }
  }

  // 由于 style 要转换成 string， 所以必须整个 style 对象都更新
  for (const styleKey in styleUpdates) {
    const styleValue = styleUpdates[styleKey];
    if (styleValue) {
      updatePayload.push(styleKey, Object.assign({}, lastProps[styleKey], styleValue));
    }
  }

  return updatePayload.length ? updatePayload : null;
}
