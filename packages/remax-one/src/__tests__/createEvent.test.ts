import {
  createCallback,
  createInputEvent,
  createImageEvent,
  createFormEvent,
  createTouchEvent,
  createTapEvent,
} from '../createHostComponent';
import { ImageLoadEvent, FormEvent, TapEvent, TouchEvent } from '../types';
const nativeEvent = {
  target: {
    id: 1,
    offsetLeft: 0,
    offsetTop: 0,
    dataset: {},
  },
  currentTarget: {
    id: 1,
    offsetLeft: 0,
    offsetTop: 0,
    dataset: {},
  },
  detail: {
    value: 'value',
  },
  type: 'event',
  touches: [],
  changedTouches: [],
};

describe('create event', () => {
  it('return undefined if callback not exist', () => {
    const callback = createCallback(undefined, createInputEvent);

    expect(callback).toBeUndefined();
  });

  it('createInputEvent', () => {
    const callback = createCallback((e: InputEvent) => e, createInputEvent);

    const event = callback!(nativeEvent);
    expect(event).toMatchInlineSnapshot(`
      Object {
        "currentTarget": Object {
          "dataset": Object {},
          "id": 1,
          "offsetLeft": 0,
          "offsetTop": 0,
        },
        "nativeEvent": Object {
          "changedTouches": Array [],
          "currentTarget": Object {
            "dataset": Object {},
            "id": 1,
            "offsetLeft": 0,
            "offsetTop": 0,
          },
          "detail": Object {
            "value": "value",
          },
          "target": Object {
            "dataset": Object {},
            "id": 1,
            "offsetLeft": 0,
            "offsetTop": 0,
          },
          "touches": Array [],
          "type": "event",
        },
        "originalEvent": Object {
          "changedTouches": Array [],
          "currentTarget": Object {
            "dataset": Object {},
            "id": 1,
            "offsetLeft": 0,
            "offsetTop": 0,
          },
          "detail": Object {
            "value": "value",
          },
          "target": Object {
            "dataset": Object {},
            "id": 1,
            "offsetLeft": 0,
            "offsetTop": 0,
          },
          "touches": Array [],
          "type": "event",
        },
        "target": Object {
          "dataset": Object {},
          "id": 1,
          "offsetLeft": 0,
          "offsetTop": 0,
          "value": "value",
        },
        "type": "event",
      }
    `);
  });

  it('createImageEvent', () => {
    const callback = createCallback((e: ImageLoadEvent) => e, createImageEvent);

    const event = callback!(nativeEvent);
    expect(event).toMatchInlineSnapshot(`
      Object {
        "currentTarget": Object {
          "dataset": Object {},
          "id": 1,
          "offsetLeft": 0,
          "offsetTop": 0,
        },
        "nativeEvent": Object {
          "changedTouches": Array [],
          "currentTarget": Object {
            "dataset": Object {},
            "id": 1,
            "offsetLeft": 0,
            "offsetTop": 0,
          },
          "detail": Object {
            "value": "value",
          },
          "target": Object {
            "dataset": Object {},
            "id": 1,
            "offsetLeft": 0,
            "offsetTop": 0,
          },
          "touches": Array [],
          "type": "event",
        },
        "originalEvent": Object {
          "changedTouches": Array [],
          "currentTarget": Object {
            "dataset": Object {},
            "id": 1,
            "offsetLeft": 0,
            "offsetTop": 0,
          },
          "detail": Object {
            "value": "value",
          },
          "target": Object {
            "dataset": Object {},
            "id": 1,
            "offsetLeft": 0,
            "offsetTop": 0,
          },
          "touches": Array [],
          "type": "event",
        },
        "target": Object {
          "dataset": Object {},
          "id": 1,
          "offsetLeft": 0,
          "offsetTop": 0,
          "value": "value",
        },
        "type": "event",
      }
    `);
  });

  it('createFormEvent', () => {
    const callback = createCallback((e: FormEvent) => e, createFormEvent);

    const event = callback!(nativeEvent);
    expect(event).toMatchInlineSnapshot(`
      Object {
        "currentTarget": Object {
          "dataset": Object {},
          "id": 1,
          "offsetLeft": 0,
          "offsetTop": 0,
        },
        "nativeEvent": Object {
          "changedTouches": Array [],
          "currentTarget": Object {
            "dataset": Object {},
            "id": 1,
            "offsetLeft": 0,
            "offsetTop": 0,
          },
          "detail": Object {
            "value": "value",
          },
          "target": Object {
            "dataset": Object {},
            "id": 1,
            "offsetLeft": 0,
            "offsetTop": 0,
          },
          "touches": Array [],
          "type": "event",
        },
        "originalEvent": Object {
          "changedTouches": Array [],
          "currentTarget": Object {
            "dataset": Object {},
            "id": 1,
            "offsetLeft": 0,
            "offsetTop": 0,
          },
          "detail": Object {
            "value": "value",
          },
          "target": Object {
            "dataset": Object {},
            "id": 1,
            "offsetLeft": 0,
            "offsetTop": 0,
          },
          "touches": Array [],
          "type": "event",
        },
        "target": Object {
          "dataset": Object {},
          "id": 1,
          "offsetLeft": 0,
          "offsetTop": 0,
          "value": "value",
        },
        "type": "event",
      }
    `);
  });

  it('createTapEvent', () => {
    const callback = createCallback((e: TapEvent) => e, createTapEvent);

    const event = callback!(nativeEvent);
    expect(event).toMatchInlineSnapshot(`
      Object {
        "currentTarget": Object {
          "dataset": Object {},
          "id": 1,
          "offsetLeft": 0,
          "offsetTop": 0,
        },
        "nativeEvent": Object {
          "changedTouches": Array [],
          "currentTarget": Object {
            "dataset": Object {},
            "id": 1,
            "offsetLeft": 0,
            "offsetTop": 0,
          },
          "detail": Object {
            "value": "value",
          },
          "target": Object {
            "dataset": Object {},
            "id": 1,
            "offsetLeft": 0,
            "offsetTop": 0,
          },
          "touches": Array [],
          "type": "event",
        },
        "originalEvent": Object {
          "changedTouches": Array [],
          "currentTarget": Object {
            "dataset": Object {},
            "id": 1,
            "offsetLeft": 0,
            "offsetTop": 0,
          },
          "detail": Object {
            "value": "value",
          },
          "target": Object {
            "dataset": Object {},
            "id": 1,
            "offsetLeft": 0,
            "offsetTop": 0,
          },
          "touches": Array [],
          "type": "event",
        },
        "stopPropagation": undefined,
        "target": Object {
          "dataset": Object {},
          "id": 1,
          "offsetLeft": 0,
          "offsetTop": 0,
          "value": "value",
        },
        "type": "event",
      }
    `);
  });

  it('createTouchEvent', () => {
    const callback = createCallback((e: TouchEvent) => e, createTouchEvent);

    const event = callback!(nativeEvent);
    expect(event).toMatchInlineSnapshot(`
      Object {
        "changedTouches": Array [],
        "currentTarget": Object {
          "dataset": Object {},
          "id": 1,
          "offsetLeft": 0,
          "offsetTop": 0,
        },
        "nativeEvent": Object {
          "changedTouches": Array [],
          "currentTarget": Object {
            "dataset": Object {},
            "id": 1,
            "offsetLeft": 0,
            "offsetTop": 0,
          },
          "detail": Object {
            "value": "value",
          },
          "target": Object {
            "dataset": Object {},
            "id": 1,
            "offsetLeft": 0,
            "offsetTop": 0,
          },
          "touches": Array [],
          "type": "event",
        },
        "originalEvent": Object {
          "changedTouches": Array [],
          "currentTarget": Object {
            "dataset": Object {},
            "id": 1,
            "offsetLeft": 0,
            "offsetTop": 0,
          },
          "detail": Object {
            "value": "value",
          },
          "target": Object {
            "dataset": Object {},
            "id": 1,
            "offsetLeft": 0,
            "offsetTop": 0,
          },
          "touches": Array [],
          "type": "event",
        },
        "stopPropagation": undefined,
        "target": Object {
          "dataset": Object {},
          "id": 1,
          "offsetLeft": 0,
          "offsetTop": 0,
          "value": "value",
        },
        "touches": Array [],
        "type": "event",
      }
    `);
  });
});
