import { FC, useCallback, useEffect, useState } from 'react';
import Table from '../ui-kit/Table/Table';
import { DataType, ITableColumn } from '../../ts/models/table.model';
import { testShopping } from '../../data/testShoppingData';

interface IYearTable {
  year: number;
}

const YearTable: FC<IYearTable> = ({ year }) => {
  const [data, setData] = useState<DataType[]>([]);
  const [headers, setHeaders] = useState<ITableColumn[]>();

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
  }, [year]);

  useEffect(() => {
    getData();
  }, []);

  return <Table data={data} headers={[]} />;
};

export default YearTable;
