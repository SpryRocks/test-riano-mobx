import AsyncStorage from '@react-native-community/async-storage';
import {AsyncTrunk} from 'mobx-sync';
import {state} from 'store';

export default {
  initAsync: async (sync: boolean = true) => {
    state.init();
    if (sync) {
      const trunk = new AsyncTrunk(state, {storage: AsyncStorage});
      await trunk.init();
    }
  },
};
