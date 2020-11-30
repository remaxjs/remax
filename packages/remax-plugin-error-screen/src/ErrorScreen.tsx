import * as React from 'react';
import { View } from 'remax/one';

const styles = {
  screen: {
    height: '100vh',
    backgroundColor: '#fff',
    lineHeight: 1.4,
    textAlign: 'center' as const,
  },
  text: {
    color: '#999',
    fontSize: '16PX',
  },
};

const ErrorScreen: React.FC = () => (
  <View style={styles.screen}>
    <View style={styles.text}>页面遇到一些问题</View>
  </View>
);

export default ErrorScreen;
