import StoreInitializer from 'store/StoreInitializer';
import {} from 'managers';

export default {
  initAsync: async () => {
    await StoreInitializer.initAsync();

    // await UpdateManager.updateSections();
  },
};
