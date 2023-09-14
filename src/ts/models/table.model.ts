import { ColumnType } from 'antd/es/table';

export type DataType = {
  key: string;
};

export type Filter = {
  text: string;
  value: string | number | boolean;
};

export interface ITableColumn extends ColumnType<DataType> {
  filterSettings: {
    isSorted: N<boolean>;
    isSearched: N<boolean>;
    filters: N<Filter[]>;
  };
  referense: string;
}
