import { makeAutoObservable } from 'mobx';
import RootStore from '../rootstore';

class PurchaseStore {
  rootStore;

  constructor(rootStore: typeof RootStore) {
    makeAutoObservable(this, {
      rootStore: false,
    });
    this.rootStore = rootStore;
  }
}

export default PurchaseStore;
