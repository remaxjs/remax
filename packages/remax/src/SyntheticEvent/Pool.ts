export default class SyntheticEventPool {
  public static DEPRECATED_CATCH_TYPE = 'catchClick';
  public static SYNTHETIC_TYPES = ['onClick'];

  public static isSyntheticType(inputType: string) {
    /* istanbul ignore next */
    if (this.DEPRECATED_CATCH_TYPE === inputType.toLowerCase()) {
      console.warn(
        'DEPRECATION: remax 已支持在 onClick 事件中使用 stopPropagation 阻止事件冒泡，请尽量不要使用 catchClick'
      );
    }

    return !!this.SYNTHETIC_TYPES.find(type => type === inputType);
  }

  constructor() {
    this.state = {};

    SyntheticEventPool.SYNTHETIC_TYPES.forEach(type =>
      this.initialEventState(type)
    );
  }

  public initialEventState(eventType: string, eventId?: string) {
    if (!this.state[eventType]) {
      this.state[eventType] = {};
    }

    if (eventId) {
      this.state[eventType] = {
        [eventId]: {
          propagationStopped: false,
        },
      };
    }
  }

  public stopPropagation(eventType: string, eventId: string) {
    /* istanbul ignore next */
    if (!this.state[eventType] || !this.state[eventType][eventId]) {
      return;
    }

    this.state[eventType][eventId].propagationStopped = true;
  }

  public isPropagationStopped(eventType: string, eventId: string) {
    return (
      this.state[eventType] &&
      this.state[eventType][eventId] &&
      this.state[eventType][eventId].propagationStopped
    );
  }

  private state: {
    [eventType: string]: {
      [eventId: string]: {
        propagationStopped: boolean;
      };
    };
  };
}
