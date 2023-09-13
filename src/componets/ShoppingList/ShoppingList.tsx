import React, { FC, useCallback, useEffect, useState } from 'react';

import styles from './ShoppingList.module.scss';
import { IPurchase } from '../../ts/models/shopping.model';
import { testShopping } from '../../data/testShoppingData';
import ShoppingItem from './ShoppingItem/ShoppingItem';
import purchasesApi from '../../api/purchases';
import SortedList from './SortedList/SortedList';
import SearchedList from './SearchedList/SearchedList';

interface IShoppingList {
  isUpdate: boolean;
  setIsUpdate: SetState<boolean>;
}

const ShoppingList: FC<IShoppingList> = ({ isUpdate, setIsUpdate }) => {
  const [shoppingList, setShoppingList] = useState<IPurchase[]>(testShopping);

  const getData = useCallback(async () => {
    // setIsUpdate(false);
    // const res = await purchasesApi.fetchAllList();
    // if (!res) return;
    // setShoppingList(res.data);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    isUpdate && getData();
  }, [isUpdate]);

  return (
    <section className={styles.container}>
      <SearchedList setShoppingList={setShoppingList} />
      <SortedList
        shoppingList={shoppingList}
        setShoppingList={setShoppingList}
      />
      <ul className={styles.wrapper}>
        {shoppingList.length
          ? shoppingList.map((purchase) => (
              <ShoppingItem key={purchase.id} purchase={purchase} />
            ))
          : null}
      </ul>
    </section>
  );
};

export default ShoppingList;
