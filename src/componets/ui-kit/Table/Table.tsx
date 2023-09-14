import { FC, useEffect, useState } from 'react';
import { Table as AntdTable } from 'antd';
import { DataType, ITableColumn } from '../../../ts/models/table.model';
import { addFiltersSettings } from './helpers/addFiltersSettings';

interface ITable {
  data: DataType[];
  headers: ITableColumn[];
}

const Table: FC<ITable> = ({ data, headers }) => {
  const [columns, setColumns] = useState<ITableColumn[]>([]);

  useEffect(() => {
    const newColumns = headers.map((header) => {
      const newColumn = {
        ...header,
        dataIndex: header.referense,
      };

      if (newColumn.filterSettings) {
        addFiltersSettings(newColumn);
      }

      return newColumn;
    });

    setColumns(newColumns);
  }, [headers]);

  return <AntdTable dataSource={data} columns={columns} />;
};

export default Table;
