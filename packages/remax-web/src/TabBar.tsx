import * as React from 'react';
import { History } from 'history';
import { Link } from 'react-router-dom';
import { TabBarConfig, TabItem } from './types';

export function TabBar({ config, history }: { config: TabBarConfig; history: History }) {
  const [currentPath, setCurrentPath] = React.useState<string>(history.location.pathname);
  const [hideTarBar, setHideTarBar] = React.useState(false);
  const tabBarList = config.items.map(item => item.url);

  const filterTabBarItem = () => {
    // 移除 history.location.pathname 中第一个反斜杠否则导致includes判定不正确
    return tabBarList.includes(history.location.pathname.substr(1));
  };

  React.useEffect(() => {
    setCurrentPath(history.location.pathname);

    return history.listen(() => {
      setCurrentPath(history.location.pathname);
      setHideTarBar(!filterTabBarItem());
    });
  }, []);

  const isActive = (url: string) => {
    if (!url.startsWith('/')) {
      url = '/' + url;
    }
    return currentPath === url;
  };

  if (!hideTarBar) {
    return (
      <div className="remax-tab-bar" style={{ backgroundColor: config.backgroundColor ?? '' }}>
        {config.items.map((item, index) => (
          <TabBarItem key={index} config={config} isActive={isActive(item.url)} item={item} />
        ))}
      </div>
    );
  }
  return null;
}

function TabBarItem({ config, isActive, item }: { config: TabBarConfig; isActive: boolean; item: TabItem }) {
  const icon = isActive ? item.activeImage || item.image : item.image;
  const textColor = config.textColor ?? '#333';
  const selectedColor = config.selectedColor ?? '#108ee9';

  return (
    <Link to={`/${item.url}`} className="remax-tab-item">
      <div className="remax-tab-item-image" style={{ backgroundImage: `url(${icon})` }} />
      <div
        className="remax-tab-item-title"
        style={{
          color: isActive ? selectedColor : textColor,
        }}
      >
        {item.title}
      </div>
    </Link>
  );
}
