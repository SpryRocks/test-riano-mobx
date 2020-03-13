import AsyncStorage from '@react-native-community/async-storage';
import {configure} from 'mobx';
import {AsyncTrunk} from 'mobx-sync';
import {state} from 'store';

export default {
  initAsync: async (sync: boolean = true) => {
    configure({enforceActions: 'observed'});
    state.init();
    if (sync) {
      const trunk = new AsyncTrunk(state, {storage: AsyncStorage});
      await trunk.init();
    }
  },
};
