import * as React from 'react';
import { Fragment } from 'react';
import { View, View as CustomView, Text, Button, Picker } from 'remax/ali';
import { createHostComponent } from 'remax/macro';
import * as Remax from 'remax/one';
import Badge from 'mini-antui/es/badge/index';
import Card from '@/components/Card';
import A from './module';

const DDD = createHostComponent('ddd', []);

const RenameView = View;

const Deep = {
  Object: {
    View,
  },
};

function ReactComp({ children }) {
  return (
    <>
      <View>
        <Text>react component</Text>
        <>
          <Text>Text inside Fragment</Text>
        </>
        {<View>View inside Expression</View>}
        {React.Children.map(children, (child, index) => {
          if (index === 2) {
            return child;
          }
          return React.cloneElement(child, { id: 'reactComp' + index });
        })}
      </View>
    </>
  );
}

export default function Index() {
  const [count] = React.useState(1);
  const [show, setShow] = React.useState(true);
  const [arr, setArr] = React.useState([1, 2, 3, 4, 5]);
  const props = { id: 'spreadId' };
  const [showPlainText, setShowPlainText] = React.useState(true);
  const plainText = 'plain-text-leaf';
  return (
    <View entry>
      {'expression entry'}
      <View>First View</View>
      <View>
        <>
          <Fragment>
            <Text>Fragment Text 1</Text>
            <Text>Fragment Text 2</Text>
            <Fragment>
              <Text>Fragment Text 3</Text>
              <Text>Fragment Text 4</Text>
            </Fragment>
          </Fragment>
          <React.Fragment>React.Fragment</React.Fragment>
          {A}
          <DDD />
          <Remax.Text>Remax.Text</Remax.Text>
          <Badge />
          <Card />
          <ReactComp>
            <View>React Component First Child</View>
            <Text>React Component Second Child</Text>
            <View>React Component Third Child</View>
          </ReactComp>
          <View className="className">Count: {count}</View>
          <View id={'id' + count} className="class">
            view
          </View>
          <CustomView>custom view</CustomView>
          {React.createElement('view', { id: 'view' }, [
            <View key="1">create element children 1</View>,
            React.createElement('view', { key: '2' }),
          ])}
          {arr.map(item => (
            <View onClick={() => setArr(arr.filter(a => a !== item))} key={item}>
              array map: {item}
            </View>
          ))}
          <View {...props}>Spread Attributes View</View>
          <Text>long long long long long long long long long long long long text</Text>
          {'Literal Expression'}
          <Deep.Object.View>Deep Object View</Deep.Object.View>
          <RenameView>Rename View</RenameView>
          {show && <View>Conditional View</View>}
          <Button id="toggle-view" onClick={() => setShow(!show)}>
            toggle Conditional View
          </Button>
          <Text leaf>{showPlainText && plainText}</Text>
          <Button id="toggle-leaf" onClick={() => setShowPlainText(!showPlainText)}>
            toggle Plain Text Leaf
          </Button>

          <Picker range={[1, 2, 3, 4]}>
            <View id="picker">picker</View>
          </Picker>
        </>
      </View>
    </View>
  );
}
