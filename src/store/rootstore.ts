import PurchaseStore from './purchaseStore/purchaseStore';

class RootStore {
  purchaseStore;

  constructor() {
    this.purchaseStore = new PurchaseStore(this);
  }
}

export default new RootStore();
