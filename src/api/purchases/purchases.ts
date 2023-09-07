import tryCatchWrapper from "../helpers/tryCatchWrapper";
import http from "../http";

const LIST = "list";

const purchasesApi = {
  fetchAllList: () =>
    tryCatchWrapper(async () => {
      const res = await http.get(LIST);

      return res;
    }),
};

export default purchasesApi;
