import * as React from 'react';
import { View, Image } from 'remax/one';

const styles = {
  screen: {
    height: '100vh',
    backgroundColor: '#fff',
    lineHeight: 1.4,
    textAlign: 'center' as const,
  },
  img: {
    width: '100PX',
    height: '100PX',
    margin: '3.2rem 0 .4rem',
  },
  text: {
    color: '#999',
    fontSize: '16PX',
  },
};

const ErrorScreen: React.FC = () => (
  <View style={styles.screen}>
    <Image
      style={styles.img}
      src="https://gw.alipayobjects.com/mdn/rms_997765/afts/img/A*X2QUQJayoboAAAAAAAAAAABkARQnAQ"
    />
    <View style={styles.text}>页面遇到一些问题</View>
  </View>
);

export default ErrorScreen;
