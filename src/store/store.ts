import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { server } from './server/index';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    something: 'It was at this moment he knew' // a simple property
  },
  modules: {
    server
  }
};

export default new Vuex.Store<RootState>(store);