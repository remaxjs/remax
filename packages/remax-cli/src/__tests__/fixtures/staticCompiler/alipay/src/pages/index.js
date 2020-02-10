import * as React from 'react';
import { Fragment } from 'react';
import { View, View as CustomView, Text } from 'remax/alipay';
import { createHostComponent } from 'remax/macro';
import * as Remax from 'remax/alipay';
import NativeComponent from '@/components/nativeComponent';
import RemaxWindow from 'remax-window';

const RenameView = View;

const Deep = {
  Object: {
    View,
  },
};

const DDD = createHostComponent('ddd', []);

function ReactComp({ children }) {
  return (
    <View>
      <Text>react component</Text>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, { id: 'reactComp' + index })
      )}
    </View>
  );
}

export default function Index() {
  const [count] = React.useState(1);
  const props = { id: 'spreadId' };
  const [show] = React.useState(true);
  const [showPlainText] = React.useState(true);
  const plainText = 'plain-text-leaf';
  return (
    <>
      {/* 注释 */}
      <Fragment>Fragment</Fragment>
      <React.Fragment>React.Fragment</React.Fragment>
      <DDD />
      <Remax.Text>Remax.Text</Remax.Text>
      <NativeComponent />
      <ReactComp>
        <View>React Component First Child</View>
        {'React Component Second Child'}
      </ReactComp>
      <View className="className">Count: {count}</View>
      <View id={count} className={'class'}>
        view
      </View>
      <CustomView>custom view</CustomView>
      {React.createElement('view', { id: 'view' }, [
        <View key="1">create element children 1</View>,
        React.createElement('view', { key: '2' }),
      ])}
      {[1, 2, 3].map(item => (
        <View key={item}>array map: {item}</View>
      ))}
      <View {...props}>Spread Attributes View</View>
      <Text>
        long long long long long long long long long long long long text long
        long long long long long long long long long long long text
      </Text>
      <RemaxWindow />
      {'Literal Expression'}
      <Deep.Object.View>Deep Object View</Deep.Object.View>
      <RenameView>Rename View</RenameView>
      {show && <View>Conditional View</View>}
      <Text leaf>
        {showPlainText && plainText} {showPlainText && '第二段'}{' '}
        {showPlainText && plainText}
      </Text>
    </>
  );
}
