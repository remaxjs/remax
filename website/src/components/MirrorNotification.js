import React, { useEffect, useRef } from 'react';
import fetch from 'isomorphic-fetch';
import { notification, Button, Icon } from 'antd';
import trace from './trace';

const HIDE_KEY = 'hide-mirror-notification';

const MirrorNotification = () => {
  const handleHide = () => {
    notification.close('inc-notification');
    window.localStorage.setItem(HIDE_KEY, '1');
  };

  useEffect(() => {
    const hide = window.localStorage.getItem(HIDE_KEY);
    if (hide) {
      return;
    }
    if (window.location.host === 'remaxjs.gitee.io') {
      return;
    }
    Promise.race([
      fetch(
        'https://pbs.twimg.com/profile_images/812707130574716928/5m4HpmT5_400x400.jpg'
      ),
      new Promise(resolve => {
        setTimeout(() => resolve(false), 2000);
      }),
    ])
      .then(result => {
        if (result === false) {
          notification.info({
            key: 'inc-notification',
            message: '提示',
            description: (
              <div>
                <p>
                  如果你发现访问本文档速度很慢，建议访问部署在国内的镜像站点，是否跳转？
                </p>
                <div style={{ textAlign: 'right' }}>
                  <Button
                    size="small"
                    type="primary"
                    style={{ marginRight: 8 }}
                    href="https://remaxjs.gitee.io"
                    target="_blank"
                    onClick={() => {
                      trace('event', 'click', {
                        event_category: 'MirrorGuide',
                      });
                    }}
                  >
                    <Icon type="thunderbolt" /> 立即跳转
                  </Button>
                  <Button size="small" onClick={handleHide}>
                    不再提醒
                  </Button>
                </div>
              </div>
            ),
            placement: 'bottomRight',
            duration: 0,
          });
        }
      })
      .catch(() => {
        // ignore
      });
  }, []);
  return null;
};

export default MirrorNotification;
