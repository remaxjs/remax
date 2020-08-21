import * as Button from './Button/node';
import * as View from './View/node';
import * as ScrollView from './ScrollView/node';
import * as Swiper from './Swiper/node';
import * as SwiperItem from './SwiperItem/node';
import * as Icon from './Icon/node';
import * as Progress from './Progress/node';
import * as RichText from './RichText/node';
import * as Text from './Text/node';
import * as Checkbox from './Checkbox/node';
import * as CheckboxGroup from './CheckboxGroup/node';
import * as Form from './Form/node';
import * as Input from './Input/node';
import * as Image from './Image/node';
import * as Label from './Label/node';
import * as Textarea from './Textarea/Node';
import * as Video from './Video/Node';

const hostComponents = new Map();

hostComponents.set('button', Button);
hostComponents.set('view', View);
hostComponents.set('scroll-view', ScrollView);
hostComponents.set('swiper', Swiper);
hostComponents.set('swiper-item', SwiperItem);
hostComponents.set('icon', Icon);
hostComponents.set('progress', Progress);
hostComponents.set('rich-text', RichText);
hostComponents.set('text', Text);
hostComponents.set('checkbox', Checkbox);
hostComponents.set('checkbox-group', CheckboxGroup);
hostComponents.set('form', Form);
hostComponents.set('input', Input);
hostComponents.set('image', Image);
hostComponents.set('label', Label);
hostComponents.set('textarea', Textarea);
hostComponents.set('video', Video);

export default hostComponents;
