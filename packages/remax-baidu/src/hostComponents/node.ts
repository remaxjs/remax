import * as button from './Button/node';
import * as view from './View/node';
import * as scrollView from './ScrollView/node';

const hostComponents = new Map();

hostComponents.set('button', button);
hostComponents.set('view', view);
hostComponents.set('scroll-view', scrollView);

export default hostComponents;
