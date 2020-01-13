/**
 * 合成事件处理流程
 * 1. 记录所有事件的 ID，包括冒泡事件 ID 和触发点击的事件 ID
 * 2. 如何判断是否是触发点击的事件：只要当前冒泡事件的 ID 小于等于触发点击的事件 ID，就认为当前事件是触发点击的事件，即新事件流
 * 3. 阻止冒泡时，就会记录下哪一个触发点击的事件阻止了冒泡，在后续冒泡事件中就都会查询是否被阻止冒泡了
 */

import SyntheticEventPool from './Pool';

const eventPool = new SyntheticEventPool();

function createBaseSyntheticEvent(
  eventType: string,
  eventId: string,
  nativeEvent: any
) {
  // 添加阻止冒泡方法
  nativeEvent.stopPropagation = () => {
    eventPool.stopPropagation(eventType, eventId);
  };

  return nativeEvent;
}

/**
 * 获取事件 ID
 *
 */
function getEventId(event: any) {
  if (event?.target?.targetDataset) {
    return event?.target?.targetDataset?.rid;
  }

  return event?.target?.dataset?.rid;
}

/**
 * 获取当前冒泡的事件 ID
 *
 */
function getCurrentEventId(event: any) {
  if (event?.target?.targetDataset) {
    return event?.target?.dataset?.rid;
  }

  return event?.currentTarget?.dataset?.rid;
}

/**
 * 判断是否是新事件
 *
 */
function isNewEvent(eventType: string, event: any) {
  const currentEventId = getCurrentEventId(event);
  const latestEventId =
    eventPool.getLatestEvent(eventType, getEventId(event)) || currentEventId;
  // 因为冒泡上去的事件 ID 只会越来越大，所以只要当前事件 ID 小于等于冒泡记录的最后一个事件 ID，就是新的事件流
  return currentEventId <= latestEventId;
}

export function createCallbackProxy(
  eventType: string,
  callback: (...params: any) => any
) {
  if (!SyntheticEventPool.isSyntheticType(eventType)) {
    return callback;
  }

  return function(nativeEvent: any, ...restParams: any) {
    const eventId = getEventId(nativeEvent);
    const currentEventId = getCurrentEventId(nativeEvent);

    if (!eventId) {
      return callback(nativeEvent, ...restParams);
    }

    const syntheticEvent = createBaseSyntheticEvent(
      eventType,
      eventId,
      nativeEvent
    );

    if (isNewEvent(eventType, nativeEvent)) {
      // 新的事件流，初始化 store 数据
      eventPool.initialEventState(eventType, eventId, currentEventId);
    } else {
      // 记录当前冒泡到的事件 ID
      eventPool.setLatestEvent(eventType, eventId, currentEventId);
    }

    if (eventPool.isPropagationStopped(eventType, eventId)) {
      return;
    }

    return callback(syntheticEvent, ...restParams);
  };
}
