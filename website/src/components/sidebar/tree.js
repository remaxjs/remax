import React, { useState } from 'react';
import config from '../../../config';
import TreeNode from './treeNode';
import sort from '../sort';

const calculateTreeData = edges => {
  const originalData = config.sidebar.ignoreIndex
    ? edges.filter(
        ({
          node: {
            fields: { slug },
          },
        }) => slug !== '/'
      )
    : edges;
  const tree = originalData.reduce(
    (
      accu,
      {
        node: {
          fields: { slug, title, order },
        },
      }
    ) => {
      const parts = slug.split('/');
      let { items: prevItems } = accu;
      for (const part of parts.slice(1, -1)) {
        let tmp = prevItems.find(({ label }) => label == part);
        if (tmp) {
          if (!tmp.items) {
            tmp.items = [];
          }
        } else {
          tmp = { label: part, items: [] };
          prevItems.push(tmp);
        }
        prevItems = tmp.items;
      }
      const existingItem = prevItems.find(
        ({ label }) => label === parts[parts.length - 1]
      );
      if (existingItem) {
        existingItem.url = slug;
        existingItem.title = title;
        existingItem.order = order;
      } else {
        prevItems.push({
          label: parts[parts.length - 1],
          url: slug,
          items: [],
          title,
          order,
        });
      }
      return accu;
    },
    { items: [] }
  );
  tree.items = sort(tree.items);
  const {
    sidebar: { forcedNavOrder = [] },
  } = config;
  const tmp = [...forcedNavOrder];
  tmp.reverse();
  return tmp.reduce((accu, slug) => {
    const parts = slug.split('/');
    let { items: prevItems } = accu;
    for (const part of parts.slice(1, -1)) {
      let tmp = prevItems.find(({ label }) => label == part);
      if (tmp) {
        if (!tmp.items) {
          tmp.items = [];
        }
      } else {
        tmp = { label: part, items: [] };
        prevItems.push(tmp);
      }
      prevItems = tmp.items;
    }
    prevItems = sort(prevItems);

    prevItems.forEach(item => {
      item.items = sort(item.items);
    });
    return accu;
  }, tree);
};

const Tree = ({ edges }) => {
  const [treeData] = useState(() => {
    return calculateTreeData(edges);
  });
  const [collapsed, setCollapsed] = useState({});
  const toggle = url => {
    setCollapsed({
      ...collapsed,
      [url]: !collapsed[url],
    });
  };
  return (
    <TreeNode
      className={`${
        config.sidebar.frontLine ? 'showFrontLine' : 'hideFrontLine'
      } firstLevel`}
      setCollapsed={toggle}
      collapsed={collapsed}
      {...treeData}
    />
  );
};

export default Tree;
