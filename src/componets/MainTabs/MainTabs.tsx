import { Tabs } from 'antd';
import React, { useState } from 'react';
import Purchases from '../Purchases/Purchases';
import ShoppingList from '../ShoppingList/ShoppingList';

const MainTabs = () => {
  const [isUpdate, setIsUpdate] = useState(false);

  const items = [
    {
      label: 'Добавить затрату',
      key: '1',
      children: <Purchases setIsUpdate={setIsUpdate} />,
    },
    {
      label: 'Список затрат',
      key: '2',
      children: <ShoppingList isUpdate={isUpdate} setIsUpdate={setIsUpdate} />,
    },
  ];

  return <Tabs type="card" items={items} size="large" centered />;
};

export default MainTabs;
