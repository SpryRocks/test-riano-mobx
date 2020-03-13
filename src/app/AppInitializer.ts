import StoreInitializer from 'store/StoreInitializer';
import {UpdateManager} from 'managers';

export default {
  initAsync: async () => {
    await StoreInitializer.initAsync();

      await UpdateManager.updateCountries();
      await UpdateManager.updateCurrencies();
  },
};
