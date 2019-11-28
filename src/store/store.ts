import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import servers from './servers';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    servers
  }
};

export default new Vuex.Store<RootState>(store);
