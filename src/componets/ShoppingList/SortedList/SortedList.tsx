import { Select } from 'antd';
import { FC, useEffect, useState } from 'react';
import { IPurchase } from '../../../ts/models/shopping.model';

import styles from './SortedList.module.scss';

interface ISortedList {
  shoppingList: IPurchase[];
  setShoppingList: SetState<IPurchase[]>;
}

type SortType = 'desc' | 'inc';
enum Sorts {
  desc = 'desc',
  inc = 'inc',
}

const SortedList: FC<ISortedList> = ({ shoppingList, setShoppingList }) => {
  const [sortedBy, setSortedBy] = useState<SortType>(Sorts.desc);

  const options = [
    {
      label: 'По возрастанию',
      value: Sorts.desc,
    },
    {
      label: 'По убыванию',
      value: Sorts.inc,
    },
  ];

  useEffect(() => {
    const newList = [...shoppingList];
    if (sortedBy == Sorts.desc)
      return setShoppingList(newList.sort((a, b) => a.amount - b.amount));

    setShoppingList(newList.sort((a, b) => b.amount - a.amount));
  }, [sortedBy]);

  return (
    <Select
      options={options}
      onChange={(value) => {
        setSortedBy(value);
        console.log(value);
      }}
      className={styles.sorted}
      size="large"
      defaultValue={Sorts.desc}
    />
  );
};

export default SortedList;
