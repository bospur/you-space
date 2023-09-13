import React, { FC, useState } from 'react';
import styles from './ShoppingItem.module.scss';
import { IPurchase } from '../../../ts/models/shopping.model';
import { Button } from 'antd';
import { SHOPPING_VOCAB } from '../../../constants/vocabluares/shoppingVocab';

interface IShoppingItem {
  purchase: IPurchase;
}

const ShoppingItem: FC<IShoppingItem> = ({ purchase }) => {
  const [isMouse, setIsMouse] = useState(false);

  const handeleMouseEnter = () => setTimeout(() => setIsMouse(true), 300);
  const handleMouseLeave = () => setTimeout(() => setIsMouse(false), 300);

  return (
    <li
      className={styles.wrapper}
      onMouseEnter={handeleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p>{purchase.amount}</p>
      <p>{SHOPPING_VOCAB[purchase.category]}</p>
      <Button danger type="primary" className={styles.delete}>
        {isMouse ? 'Удалить' : null}
      </Button>
    </li>
  );
};

export default ShoppingItem;
