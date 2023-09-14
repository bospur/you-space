import { Filter, ITableColumn } from '../../../../ts/models/table.model';

const addSorted = (column: ITableColumn) => {
  column.sorter = true;
};

const addFilters = (column: ITableColumn, filters: Filter[]) => {
  column.filters = filters;
};

export const addFiltersSettings = (column: ITableColumn) => {
  const { isSorted, filters } = column.filterSettings;

  if (isSorted) {
    addSorted(column);
  }

  if (filters) {
    addFilters(column, filters);
  }
};
