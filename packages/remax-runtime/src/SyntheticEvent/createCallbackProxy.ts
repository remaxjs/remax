import { find } from '@remax/framework-shared';
import stopPropagation, { validate as validatePropagation, isPropagationStopped } from './stopPropagation';
import { SYNTHETIC_TYPES, DEPRECATED_CATCH_TYPE } from './constants';
import VNode from '../VNode';

function isSyntheticType(inputType: string) {
  if (DEPRECATED_CATCH_TYPE === inputType) {
    console.warn(
      'DEPRECATION: remax 已支持在 onClick 事件中使用 stopPropagation 阻止事件冒泡，请尽量不要使用 catchClick'
    );
  }

  return !!find(SYNTHETIC_TYPES, type => type === inputType);
}

function createBaseSyntheticEvent(node: VNode, eventType: string, nativeEvent: any) {
  if (!nativeEvent) {
    return;
  }

  // 添加阻止冒泡方法
  nativeEvent.stopPropagation = () => {
    stopPropagation(node, eventType);
  };

  return nativeEvent;
}

export function createCallbackProxy(eventType: string, node: VNode, callback: (...params: any) => any) {
  if (!isSyntheticType(eventType)) {
    return callback;
  }

  return function (nativeEvent: any, ...restParams: any) {
    const syntheticEvent = createBaseSyntheticEvent(node, eventType, nativeEvent);

    if (isPropagationStopped[eventType]) {
      validatePropagation(node, eventType);
      return;
    }

    return callback(syntheticEvent, ...restParams);
  };
}
