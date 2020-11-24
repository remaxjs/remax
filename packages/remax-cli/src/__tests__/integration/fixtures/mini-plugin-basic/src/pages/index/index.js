import * as React from 'react';
import { View, Text, Image } from 'remax';
import Greet from '../../components/greet';
import catImage from '@/assets/images/cat.jpg';
import './index.css';

// CASE: cloneElement
const TextElement = React.cloneElement(<Text id="text">clonedElement</Text>);

export default () => {
  const props = { className: 'class-view' };
  const [obj, setObj] = React.useState({});
  const [touched, setTouched] = React.useState(false);

  // CASE: regenerator runtime
  async function handleClick() {
    await Promise.resolve(1);
    setObj({ a: { b: 'valueIn:obj.a.b' } });
  }

  function handleTouchStart() {
    setTouched(true);
  }

  // CASE: 新语法
  const didTouched = undefined ?? touched;

  return (
    <View>
      <View onClick={handleClick} onTouchStart={handleTouchStart} id="view" data-foo="dataFooAttribute" {...props}>
        viewInnerText
        {/* CASE: 新语法 */}
        {obj?.a?.b}
        {didTouched ? 'touchedTrigger' : ''}
      </View>
      {TextElement}
      {/* CASE: 静态资源引入 */}
      <Image className="cat-image" src={catImage} />
      {/* CASE: css 中引用静态资源 */}
      <View className="dog-image" />
      <Greet name="word" />
    </View>
  );
};
