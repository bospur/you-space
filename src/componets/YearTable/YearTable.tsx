import { FC, useCallback, useEffect, useState } from 'react';
import Table from '../ui-kit/Table/Table';
import { DataType, ITableColumn } from '../../ts/models/table.model';
import { testHeaders, testShopping } from '../../data/testShoppingData';
import styles from './YearTable.module.scss';
import { SHOPPING_VOCAB } from '../../constants/vocabluares/shoppingVocab';

interface IYearTable {
  year: number;
}

type VocabKeys = keyof typeof SHOPPING_VOCAB;

const YearTable: FC<IYearTable> = ({ year }) => {
  const [data, setData] = useState<DataType[]>([]);
  const [headers, setHeaders] = useState<ITableColumn[]>([]);

  const getData = useCallback(async () => {
    //логика запроса данных для таблицы с бд
    const newDate = testShopping.map((item) => {
      const newItem = {
        ...item,
        key: String(item.purchase_id),
        september: item.amount,
      };

      return newItem;
    });

    setData(newDate);
    const newHeaders = testHeaders.map((header) => {
      if (header.referense === 'category') {
        header.render = (category: VocabKeys) => (
          <p className={styles.category}>{SHOPPING_VOCAB[category]}</p>
        );
      }

      return header;
    });

    setHeaders(newHeaders);
  }, [year]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Table data={data} headers={headers} size="middle" />
    </div>
  );
};

export default YearTable;
