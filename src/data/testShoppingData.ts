import { SHOPPING_VOCAB } from '../constants/vocabluares/shoppingVocab';
import { IPurchase } from '../ts/models/shopping.model';
import { ITableColumn } from '../ts/models/table.model';

export const testShopping: IPurchase[] = [
  {
    category: 'animals',
    amount: 8000,
    purchase_id: 1,
  },
  {
    category: 'rent',
    amount: 50000,
    purchase_id: 2,
  },
  {
    category: 'health',
    amount: 10000,
    purchase_id: 3,
  },
  {
    category: 'clothes',
    amount: 6000,
    purchase_id: 4,
  },
  {
    category: 'nutrition',
    amount: 10000,
    purchase_id: 5,
  },
  {
    category: 'sport',
    amount: 10000,
    purchase_id: 6,
  },
];

export const testHeaders: ITableColumn[] = [
  {
    referense: 'category',
    title: 'Категория',
    key: 1,
    filterSettings: {
      isSorted: false,
      isSearched: false,
      filters: null,
    },
  },
  {
    referense: 'january',
    title: 'Январь',
    key: 2,
    filterSettings: {
      isSorted: false,
      isSearched: false,
      filters: null,
    },
  },
  {
    referense: 'february',
    title: 'Февраль',
    key: 3,
    filterSettings: {
      isSorted: false,
      isSearched: false,
      filters: null,
    },
  },
  {
    referense: 'march',
    title: 'Март',
    key: 4,
    filterSettings: {
      isSorted: false,
      isSearched: false,
      filters: null,
    },
  },
  {
    referense: 'april',
    title: 'Апрель',
    key: 5,
    filterSettings: {
      isSorted: false,
      isSearched: false,
      filters: null,
    },
  },
  {
    referense: 'may',
    title: 'Май',
    key: 6,
    filterSettings: {
      isSorted: false,
      isSearched: false,
      filters: null,
    },
  },
  {
    referense: 'june',
    title: 'Июнь',
    key: 7,
    filterSettings: {
      isSorted: false,
      isSearched: false,
      filters: null,
    },
  },
  {
    referense: 'jule',
    title: 'Июль',
    key: 8,
    filterSettings: {
      isSorted: false,
      isSearched: false,
      filters: null,
    },
  },
  {
    referense: 'august',
    title: 'Август',
    key: 9,
    filterSettings: {
      isSorted: false,
      isSearched: false,
      filters: null,
    },
  },
  {
    referense: 'september',
    title: 'Сентябрь',
    key: 10,
    filterSettings: {
      isSorted: false,
      isSearched: false,
      filters: null,
    },
  },
  {
    referense: 'october',
    title: 'Октябрь',
    key: 11,
    filterSettings: {
      isSorted: false,
      isSearched: false,
      filters: null,
    },
  },
  {
    referense: 'november',
    title: 'Ноябрь',
    key: 12,
    filterSettings: {
      isSorted: false,
      isSearched: false,
      filters: null,
    },
  },
  {
    referense: 'december',
    title: 'Декабрь',
    key: 13,
    filterSettings: {
      isSorted: false,
      isSearched: false,
      filters: null,
    },
  },
];
