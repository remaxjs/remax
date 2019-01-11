import React from 'react';
import Remax from '@remax/core';
import {
  useState,
  useEffect,
} from 'react';
import {
  NavBar,
  Button,
  List,
} from '@remax/weui';

let inited = false;

const Page = () => {
  const [windowWidth, setWindowWidth] = useState(400);
  useEffect(() => {
    if (!inited) {
      inited = true;
      wx.getSystemInfo({
        success: function(res) {
          setWindowWidth(res.windowWidth);
        }
      });
    }
  });

  return <>
        <NavBar tabs={[{
          title: '测试',
          key: 'test',
          content: '这是测试内容'
        }, {
          title: '选项卡二',
          key: 'hey',
          content: <><NavBar tabs={[
            {title: '嵌套', key: 'hei', content: '这是嵌套的第一个页面'},
            {title: '嵌套二', key: 'hehe', content: <Button loading>加载中的按钮</Button>},
          ]}
          windowWidth={windowWidth}
          />
          这里是嵌套的外面，props 也可以是 JSX
          </>
        }, {
          title: '选项卡三',
          key: 'test_cn',
          content: '选项卡三的内容'
        }]}
        windowWidth={windowWidth}
        />
  </>;
};

Remax.render(<Page />);