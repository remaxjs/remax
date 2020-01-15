import * as button from './Button/node';
import * as checkboxGroup from './CheckboxGroup/node';
import * as checkbox from './Checkbox/node';
import * as form from './Form/node';
import * as image from './Image/node';
import * as input from './Input/node';
import * as label from './Label/node';
import * as radioGroup from './RadioGroup/node';
import * as radio from './Radio/node';
import * as text from './Text/node';
import * as textarea from './Textarea/node';
import * as view from './View/node';
import * as webView from './WebView/node';

const hostComponents = new Map();

hostComponents.set('button', button);
hostComponents.set('checkbox-group', checkboxGroup);
hostComponents.set('checkbox', checkbox);
hostComponents.set('form', form);
hostComponents.set('image', image);
hostComponents.set('input', input);
hostComponents.set('label', label);
hostComponents.set('radio-group', radioGroup);
hostComponents.set('radio', radio);
hostComponents.set('text', text);
hostComponents.set('textarea', textarea);
hostComponents.set('view', view);
hostComponents.set('web-view', webView);

export default hostComponents;
