import { MutationTree } from 'vuex';
import { ServerState, Server } from './types';

export const mutations: MutationTree<ServerState> = {
  serverLoaded(state, payload: Server) {
    state.error = false;
    state.server = payload;
  },
  loadingError(state) {
    state.error = true;
  }
};