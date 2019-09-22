import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Container from '../Container';
import render from '../render';

// type TestRendererOptions = {}

// const TestRenderer = {
//   create(element: React.ReactElement, options?: TestRendererOptions) {
//     const nativeContext = {
//       // eslint-disable-next-line
//       setData() {},
//       // eslint-disable-next-line
//       $spliceData() {},
//     };
//     const container = new Container(nativeContext);
//     let instance = render(element, container);

//     return {
//       root: container.root,
//       toJSON() {
//         return container.root.toJSON();
//       },
//       update(newElement: React.ReactElement) {
//         if (!container._rootContainer || !container._rootContainer.current) {
//           return;
//         }

//         instance = render(newElement, container);
//       },
//       unmount() {
//         if (!container._rootContainer || !container._rootContainer.current) {
//           return;
//         }

//         instance = render(null, container);
//       },
//       getInstance() {
//         if (!container._rootContainer) {
//           return null;
//         }
//         return instance;
//       },
//     };
//   },
// };

export default TestRenderer;
