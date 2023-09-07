import React, { FC } from 'react';
import styles from './ShoppingItem.module.scss';
import { IPurchase } from '../../../ts/models/shopping.model';

interface IShoppingItem {
  purchase: IPurchase;
}

const ShoppingItem: FC<IShoppingItem> = ({ purchase }) => {
  return (
    <li className={styles.wrapper}>
      <p>{purchase.amount}</p>
      <p>{purchase.category}</p>
    </li>
  );
};

export default ShoppingItem;
