import * as React from 'react';
import { View, Text, Button, Image } from 'remax/one';

export default class Page extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Button style={{ background: '#0074D9', color: 'white' }}>Remax</Button>
        </View>

        <View>
          <Text>hello</Text>
        </View>

        <View>
          <Image
            mode="aspectFit"
            src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ"
          />
        </View>
      </View>
    );
  }
}
