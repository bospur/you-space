import { Input } from 'antd';
import { FC, useEffect, useState } from 'react';
import { IPurchase } from '../../../ts/models/shopping.model';

import styles from './SearchedList.module.scss';
import { testShopping } from '../../../data/testShoppingData';
import { SHOPPING_VOCAB } from '../../../constants/vocabluares/shoppingVocab';

interface ISearchedList {
  setShoppingList: SetState<IPurchase[]>;
}

const SearchedList: FC<ISearchedList> = ({ setShoppingList }) => {
  const [seachValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    setShoppingList(
      testShopping.filter(
        (element) =>
          SHOPPING_VOCAB[element.category]
            .toLowerCase()
            .includes(seachValue.trim().toLowerCase()) ||
          String(element.amount).includes(seachValue)
      )
    );
  }, [seachValue]);

  return (
    <Input
      type="text"
      value={seachValue}
      onChange={(e) => setSearchValue(e.target.value)}
      className={styles.search}
      placeholder="Поиск..."
      size="large"
      allowClear
    />
  );
};

export default SearchedList;