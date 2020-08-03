import React from 'react';
import cat from '@/assets/images/cat.jpg';
import { Button, Form, Image, Input, Label, Navigator, Text, Textarea, View, WebView } from '@remax/one';
import styles from './style.css';

export interface DemoProps {
  name?: string;
}

const OneTipDemo: React.FC<DemoProps> = props => {
  return (
    <View>
      <Text className={styles.text}>Fix Remax One Tips</Text>
      <Button className={styles.btn}>测试按钮</Button>
      <Form>
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Label htmlFor={'name'}>姓名</Label>
          <Input id={'name'} />
        </View>
        <Image src={cat} />
      </Form>
      <Label>备注</Label>
      <Textarea />
      <Navigator url={'../index/index'} action={'navigate'}>
        返回首页
      </Navigator>
      {/*<WebView src={'https://www.baidu.com/'} />*/}
    </View>
  );
};

export default OneTipDemo;
