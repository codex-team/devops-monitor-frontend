import { Module } from 'vuex';
import actions from './actions';
import mutations from './mutations';
import { ServerModuleState } from './types';
import { RootState } from '../types';

/**
 * Initial module state
 */
const state: ServerModuleState = {
  list: [
    {
      name: 'codex-kepler'
    }
  ]
};

const serverModule: Module<ServerModuleState, RootState> = {
  state,
  actions,
  mutations
};

export default serverModule;
