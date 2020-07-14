import bezier from 'bezier-easing';

export abstract class AnimatedNode {
  abstract getValue(observer?: Function): number;

  interpolate(inRange: number[], outRange: number[], ease = Easing.linear): AnimatedInterpolate {
    return new AnimatedInterpolate(this, inRange, outRange, ease);
  }
}

export class AnimatedValue extends AnimatedNode {
  // TODO: tempor
  private _observer?: Function;

  constructor(private _value: number) {
    super();
  }

  setValue(value: number) {
    this._value = value;
    if (this._observer) {
      const observer = this._observer;
      this._observer = void 0;
      observer();
    }
  }

  getValue(observer?: Function) {
    if (observer) {
      this._observer = observer;
    }
    return this._value;
  }
}

export class AnimatedInterpolate extends AnimatedNode {
  constructor(
    private source: AnimatedNode,
    private inRange: number[],
    private outRange: number[],
    private ease: (t: number) => number
  ) {
    super();
  }
  // TODO: Check inRange is asc

  getValue(observer?: Function) {
    const value = this.source.getValue(observer);
    const len = this.inRange.length;
    let i = 1;
    for (; i < len; i++) {
      const x1 = this.inRange[i];
      if (value < x1 || i === len - 1) {
        const x0 = this.inRange[i - 1];
        const y0 = this.outRange[i - 1];
        const y1 = this.outRange[i];
        const percent = (value - x0) / (x1 - x0);
        const result = (y1 - y0) * this.ease(percent) + y0;
        return result;
      }
    }
    return 0;
  }
}

export type TimingConfig = {
  to: number;
  duration: number;
  ease?: (t: number) => number;
};

export class AnimatedTiming {
  private _startTime = 0;
  private _startValue = 0;
  private _onEnd?: Function;
  private _next = 0;

  constructor(private value: AnimatedValue, private config: TimingConfig) {}

  private get _ease() {
    return this.config.ease || Easing.linear;
  }

  start(onEnd?: Function) {
    this._startTime = Date.now();
    this._startValue = this.value.getValue();
    this._onEnd = onEnd;
    this._next = requestAnimationFrame(this._loop);
    return this;
  }

  stop() {
    cancelAnimationFrame(this._next);
    return this;
  }

  promise() {
    return new Promise(resolve => (this._onEnd = resolve));
  }

  private _loop = () => {
    const duration = Date.now() - this._startTime;
    if (duration < this.config.duration) {
      const percent = duration / this.config.duration;
      const inc = this._ease(percent) * (this.config.to - this._startValue);
      this.value.setValue(this._startValue + inc);
      this._next = requestAnimationFrame(this._loop);
    } else {
      this.value.setValue(this.config.to);
      this._onEnd && requestAnimationFrame(this._onEnd as any);
    }
  };
}

export function timing(value: AnimatedValue, config: TimingConfig) {
  return new AnimatedTiming(value, config);
}

let ease: (t: number) => number;

function getEase() {
  if (!ease) {
    ease = bezier(0.42, 0, 1, 1);
  }
  return ease;
}

export const Easing = {
  linear(t: number) {
    return t;
  },

  ease(t: number): number {
    return getEase()(t);
  },
  /**
   * Runs an easing function forwards.
   */
  in(easing = getEase()): (t: number) => number {
    return easing;
  },

  /**
   * Runs an easing function backwards.
   */
  out(easing = getEase()): (t: number) => number {
    return t => 1 - easing(1 - t);
  },

  /**
   * Makes any easing function symmetrical. The easing function will run
   * forwards for half of the duration, then backwards for the rest of the
   * duration.
   */
  inOut(easing = getEase()): (t: number) => number {
    return t => {
      if (t < 0.5) {
        return easing(t * 2) / 2;
      }
      return 1 - easing((1 - t) * 2) / 2;
    };
  },
  bounce(t: number): number {
    if (t < 1 / 2.75) {
      return 7.5625 * t * t;
    }

    if (t < 2 / 2.75) {
      const t2 = t - 1.5 / 2.75;
      return 7.5625 * t2 * t2 + 0.75;
    }

    if (t < 2.5 / 2.75) {
      const t2 = t - 2.25 / 2.75;
      return 7.5625 * t2 * t2 + 0.9375;
    }

    const t2 = t - 2.625 / 2.75;
    return 7.5625 * t2 * t2 + 0.984375;
  },
  elastic(bounciness = 1): (t: number) => number {
    const p = bounciness * Math.PI;
    return t => 1 - Math.pow(Math.cos((t * Math.PI) / 2), 3) * Math.cos(t * p);
  },
};
