import tryCatchWrapper from '../helpers/tryCatchWrapper';
import http from '../http';

const LIST = 'purchase';

const purchasesApi = {
  fetchAllList: () =>
    tryCatchWrapper(async () => {
      const res = await http.get(LIST);

      return res;
    }),

  createNewPurchase: (body: any) =>
    tryCatchWrapper(async () => {
      const res = await http.post(LIST, body);

      return res;
    }),
};

export default purchasesApi;
