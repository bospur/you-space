import { Tabs } from 'antd';
import React from 'react';
import Purchases from '../Purchases/Purchases';
import ShoppingList from '../ShoppingList/ShoppingList';

const MainTabs = () => {
  const items = [
    {
      label: 'Добавить затрату',
      key: '1',
      children: <Purchases />,
    },
    {
      label: 'Список затрат',
      key: '2',
      children: <ShoppingList />,
    },
  ];

  return <Tabs type="card" items={items} size="large" centered />;
};

export default MainTabs;
