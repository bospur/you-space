import { SHOPPING_VOCAB } from '../../constants/vocabluares/shoppingVocab';

type ShoppingKeys = keyof typeof SHOPPING_VOCAB;
export type IPurchase = {
  category: ShoppingKeys;
  amount: number;
  id: number;
};
