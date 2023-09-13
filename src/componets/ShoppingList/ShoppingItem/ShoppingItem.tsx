import React, { FC, useState } from 'react';
import styles from './ShoppingItem.module.scss';
import { IPurchase } from '../../../ts/models/shopping.model';
import { Button, notification } from 'antd';
import { SHOPPING_VOCAB } from '../../../constants/vocabluares/shoppingVocab';
import purchasesApi from '../../../api/purchases';

interface IShoppingItem {
  purchase: IPurchase;
}

const ShoppingItem: FC<IShoppingItem> = ({ purchase }) => {
  const [isMouse, setIsMouse] = useState(false);

  const handeleMouseEnter = () => setTimeout(() => setIsMouse(true), 300);
  const handleMouseLeave = () => setTimeout(() => setIsMouse(false), 300);
  const handleDelete = async () => {
    const res = await purchasesApi.deletePurchase(purchase.purchase_id);
    if (!res) return;

    notification.success({
      message: 'Успешно',
      description: 'Запись успешно удалена',
    });
  };

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
