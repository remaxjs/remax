import React from 'react';
import Remax from '@remax/core';
import {
  useState,
  useEffect,
} from 'react';
import {
  NavBar,
} from '@remax/weui';

import '@remax/weui/dist/weui.less';

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
        }, {
          title: '嘿嘿',
          key: 'hey',
        }, {
          title: 'test 中文',
          key: 'test_cn'
        }]}
        windowWidth={windowWidth}
        />
  </>;
};

Remax.render(<Page />);
