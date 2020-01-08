const STYLE = 'style';
const CHILDREN = 'children';

export default function diffProperties(
  lastRawProps: Record<string, any> | null | undefined,
  nextRawProps: Record<string, any> | null | undefined
): null | any[] {
  let updatePayload: null | any[] = null;

  const lastProps: any = lastRawProps;
  const nextProps: any = nextRawProps;

  let propKey: string;
  let styleName: string;
  let styleUpdates: Record<string, any> | null = null;

  for (propKey in lastProps) {
    if (
      Object.prototype.hasOwnProperty.call(nextProps, propKey) ||
      !Object.prototype.hasOwnProperty.call(lastProps, propKey) ||
      lastProps[propKey] == null
    ) {
      continue;
    }
    if (propKey === STYLE) {
      const lastStyle = lastProps[propKey];
      for (styleName in lastStyle) {
        if (Object.prototype.hasOwnProperty.call(lastStyle, styleName)) {
          if (!styleUpdates) {
            styleUpdates = {};
          }
          styleUpdates[styleName] = '';
        }
      }
    } else {
      // For all other deleted properties we add it to the queue. We use
      // the whitelist in the commit phase instead.
      (updatePayload = updatePayload || []).push(propKey, null);
    }
  }

  for (propKey in nextProps) {
    const nextProp = nextProps[propKey];
    const lastProp = lastProps != null ? lastProps[propKey] : undefined;
    if (
      !Object.prototype.hasOwnProperty.call(nextProps, propKey) ||
      nextProp === lastProp ||
      (nextProp == null && lastProp == null)
    ) {
      continue;
    }
    if (propKey === STYLE) {
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
          if (
            Object.prototype.hasOwnProperty.call(lastProp, styleName) &&
            (!nextProp ||
              !Object.prototype.hasOwnProperty.call(nextProp, styleName))
          ) {
            if (!styleUpdates) {
              styleUpdates = {};
            }
            styleUpdates[styleName] = '';
          }
        }
        // Update styles that changed since `lastProp`.
        for (styleName in nextProp) {
          if (
            Object.prototype.hasOwnProperty.call(nextProp, styleName) &&
            lastProp[styleName] !== nextProp[styleName]
          ) {
            if (!styleUpdates) {
              styleUpdates = {};
            }
            styleUpdates[styleName] = nextProp[styleName];
          }
        }
      } else {
        // Relies on `updateStylesByID` not mutating `styleUpdates`.
        if (!styleUpdates) {
          if (!updatePayload) {
            updatePayload = [];
          }
          updatePayload.push(propKey, styleUpdates);
        }
        styleUpdates = nextProp;
      }
    } else if (propKey === CHILDREN) {
      if (
        lastProp !== nextProp &&
        (typeof nextProp === 'string' || typeof nextProp === 'number')
      ) {
        (updatePayload = updatePayload || []).push(propKey, '' + nextProp);
      }
    } else {
      // For any other property we always add it to the queue and then we
      // filter it out using the whitelist during the commit.
      (updatePayload = updatePayload || []).push(propKey, nextProp);
    }
  }
  if (styleUpdates) {
    (updatePayload = updatePayload || []).push(STYLE, styleUpdates);
  }

  return updatePayload;
}
