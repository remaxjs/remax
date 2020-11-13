import * as React from 'react';
import memoizeOne from 'memoize-one';
import { formatDisplayName } from '@remax/framework-shared';
import {
  TapEvent,
  TouchEvent,
  EventTarget,
  EventCurrentTarget,
  ImageLoadEvent,
  ImageErrorEvent,
  InputEvent,
  FormEvent,
} from './types';

export function createTarget(target: any, detail: any): EventTarget {
  return {
    id: target.id,
    offsetLeft: target.offsetLeft,
    offsetTop: target.offsetTop,
    dataset: target.targetDataset || target.dataset,
    value: detail?.value,
  };
}

export function createCurrentTarget(currentTarget: any): EventCurrentTarget {
  return {
    id: currentTarget.id,
    offsetLeft: currentTarget.offsetLeft,
    offsetTop: currentTarget.offsetTop,
    dataset: currentTarget.dataset,
  };
}

export const createTapEvent = (originalEvent: any): TapEvent => ({
  type: originalEvent.type,
  stopPropagation: originalEvent.stopPropagation,
  target: createTarget(originalEvent.target, originalEvent.detail),
  currentTarget: createCurrentTarget(originalEvent.currentTarget),
  originalEvent,
  nativeEvent: originalEvent,
});

export const createTouchEvent = (originalEvent: any): TouchEvent => ({
  type: originalEvent.type,
  stopPropagation: originalEvent.stopPropagation,
  target: createTarget(originalEvent.target, originalEvent.detail),
  currentTarget: createCurrentTarget(originalEvent.currentTarget),
  touches: originalEvent.touches,
  changedTouches: originalEvent.touches,
  originalEvent,
  nativeEvent: originalEvent,
});

export const createImageEvent = (originalEvent: any): ImageLoadEvent | ImageErrorEvent => ({
  type: originalEvent.type,
  target: createTarget(originalEvent.target, originalEvent.detail),
  currentTarget: createCurrentTarget(originalEvent.currentTarget),
  originalEvent,
  nativeEvent: originalEvent,
});

export function createCallback(fn: ((event: any) => void) | undefined, eventCreator: (event: any) => any) {
  if (typeof fn !== 'function') {
    return undefined;
  }

  return (originalEvent: any) => fn(eventCreator(originalEvent));
}

export const createInputEvent = (originalEvent: any): InputEvent => ({
  type: originalEvent.type,
  target: createTarget(originalEvent.target, originalEvent.detail),
  currentTarget: createCurrentTarget(originalEvent.currentTarget),
  originalEvent,
  nativeEvent: originalEvent,
});

export const createFormEvent = (originalEvent: any): FormEvent => ({
  type: originalEvent.type,
  target: createTarget(originalEvent.target, originalEvent.detail),
  currentTarget: createCurrentTarget(originalEvent.currentTarget),
  originalEvent,
  nativeEvent: originalEvent,
});

function assignDefaultProps(inputProps: any, defaultProps: any) {
  if (defaultProps) {
    Object.keys(defaultProps).forEach(key => {
      inputProps[key] = inputProps[key] ?? defaultProps[key];
    });
  }
}

export function aliasProps(props: any, alias: { [key: string]: string }) {
  if (!alias) {
    return props;
  }

  const nextProps: any = {};

  for (const key in props) {
    nextProps[alias[key] ?? key] = props[key];
  }

  return nextProps;
}

const createLongTapCallback = memoizeOne(createCallback);
const createTapCallback = memoizeOne(createCallback);
const createTouchStartCallback = memoizeOne(createCallback);
const createTouchMoveCallback = memoizeOne(createCallback);
const createTouchEndCallback = memoizeOne(createCallback);
const createTouchCancelCallback = memoizeOne(createCallback);
const createChangeCallback = memoizeOne(createCallback);
const createInputCallback = memoizeOne(createCallback);
const createConfirmCallback = memoizeOne(createCallback);
const createFocusCallback = memoizeOne(createCallback);
const createBlurCallback = memoizeOne(createCallback);
const createSubmitCallback = memoizeOne(createCallback);
const createResetCallback = memoizeOne(createCallback);
const createImageLoadCallback = memoizeOne(createCallback);
const createImageErrorCallback = memoizeOne(createCallback);

export default function createHostComponent<P = any>(
  name: string,
  alias: {
    [key: string]: string;
  } | null,
  defaults?: {
    [key: string]: any;
  }
) {
  const Component: React.ForwardRefRenderFunction<any, P> = (props: any, ref: React.Ref<any>) => {
    const inputProps = {
      ...props,
    };

    // 默认属性根据平台在这里设置
    if (defaults) {
      assignDefaultProps(inputProps, defaults);
    }

    if (props.onLongTap) {
      inputProps.onLongTap = createLongTapCallback(inputProps.onLongTap, createTapEvent);
    }
    if (inputProps.onTap) {
      inputProps.onTap = createTapCallback(inputProps.onTap, createTapEvent);
    }

    if (inputProps.onTouchStart) {
      inputProps.onTouchStart = createTouchStartCallback(inputProps.onTouchStart, createTouchEvent);
    }

    if (inputProps.onTouchMove) {
      inputProps.onTouchMove = createTouchMoveCallback(inputProps.onTouchMove, createTouchEvent);
    }

    if (inputProps.onTouchEnd) {
      inputProps.onTouchEnd = createTouchEndCallback(inputProps.onTouchEnd, createTouchEvent);
    }

    if (inputProps.onTouchCancel) {
      inputProps.onTouchCancel = createTouchCancelCallback(inputProps.onTouchCancel, createTouchEvent);
    }

    if (inputProps.onChange) {
      inputProps.onChange = createChangeCallback(inputProps.onChange, createInputEvent);
    }

    if (inputProps.onInput) {
      inputProps.onInput = createInputCallback(inputProps.onInput, createInputEvent);
    }

    if (inputProps.onConfirm) {
      inputProps.onConfirm = createConfirmCallback(inputProps.onConfirm, createInputEvent);
    }

    if (inputProps.onFocus) {
      inputProps.onFocus = createFocusCallback(inputProps.onFocus, createInputEvent);
    }

    if (inputProps.onBlur) {
      inputProps.onBlur = createBlurCallback(inputProps.onBlur, createInputEvent);
    }

    if (inputProps.onSubmit) {
      inputProps.onSubmit = createSubmitCallback(inputProps.onSubmit, createFormEvent);
    }

    if (inputProps.onReset) {
      inputProps.onReset = createResetCallback(inputProps.onReset, createFormEvent);
    }

    if (name === 'image') {
      if (inputProps.onLoad) {
        inputProps.onLoad = createImageLoadCallback(props.onLoad, createImageEvent);
      }
      if (inputProps.onError) {
        inputProps.onError = createImageErrorCallback(props.onError, createImageEvent);
      }
    }

    let nextProps = inputProps;

    if (alias) {
      nextProps = aliasProps(inputProps, alias);
    }
    nextProps.ref = ref;

    return React.createElement(name, nextProps);
  };

  if (process.env.NODE_ENV === 'development') {
    Component.displayName = formatDisplayName(name);
  }

  return React.forwardRef<any, React.PropsWithChildren<P>>(Component);
}
