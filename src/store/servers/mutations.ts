import { MutationTree } from 'vuex';
import { ServerModuleState, Server } from './types';

const mutations: MutationTree<ServerModuleState> = {
  /**
   * Set new servers list
   * @param state - module state
   * @param serversList
   */
  setServersList(state, serversList: Server[]) {
    state.servers = serversList;
  }
};

export default mutations;
