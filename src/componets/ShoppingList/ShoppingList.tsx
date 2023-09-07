import React, { FC, useCallback, useEffect, useState } from 'react';

import styles from './ShoppingList.module.scss';
import { IPurchase } from '../../ts/models/shopping.model';
import { testShopping } from '../../data/testShoppingData';
import ShoppingItem from './ShoppingItem/ShoppingItem';
import purchasesApi from '../../api/purchases';

interface IShoppingList {
  isUpdate: boolean;
  setIsUpdate: SetState<boolean>;
}

const ShoppingList: FC<IShoppingList> = ({ isUpdate, setIsUpdate }) => {
  const [shoppingList, setShoppingList] = useState<IPurchase[]>([]);

  const getData = useCallback(async () => {
    setIsUpdate(false);
    const res = await purchasesApi.fetchAllList();

    if (!res) return;

    setShoppingList(res.data);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    isUpdate && getData();
  }, [isUpdate]);

  return (
    <ul className={styles.wrapper}>
      {testShopping.length
        ? shoppingList.map((purchase) => (
            <ShoppingItem key={purchase.id} purchase={purchase} />
          ))
        : null}
    </ul>
  );
};

export default ShoppingList;
