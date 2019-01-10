import React from 'react';
import Remax from '@remax/core';
import {
  useState,
  useEffect,
} from 'react';
import {
  NavBar,
  Button,
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
          title: '嘿嘿',
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
          title: 'test 中文',
          key: 'test_cn'
        }]}
        windowWidth={windowWidth}
        />
  </>;
};

Remax.render(<Page />);
