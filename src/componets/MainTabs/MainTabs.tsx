import { Tabs } from 'antd';
import React, { useState } from 'react';
import Purchases from '../Purchases/Purchases';
import ShoppingList from '../ShoppingList/ShoppingList';
import YearTable from '../YearTable/YearTable';

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
    {
      label: 'Годовая таблица',
      key: '3',
      children: <YearTable year={2023} />,
    },
  ];

  return <Tabs type="card" items={items} size="large" centered />;
};

export default MainTabs;
