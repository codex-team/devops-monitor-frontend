import { ActionTree } from 'vuex';
import { ServerModuleState } from './types';
import { RootState } from '../types';

/**
 * Get servers data from the back-end
 */
const actions: ActionTree<ServerModuleState, RootState> = {
  /**
   * Fetch data about servers from API
   */
  async fetchData({ commit }): Promise<void> {
    commit('setServersList', { name: 'codex-kepler' });
  }
};

export default actions;
