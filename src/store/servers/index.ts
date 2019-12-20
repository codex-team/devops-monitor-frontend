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
      name: 'codex-kepler',
      services: {
        websites: [ { name: 'alpha.x.ifmo.su', status: 'disabled' }, { name: 'api.devops.codex.so', status: 'enabled' }, { name: 'codex.media', status: 'enabled' }, { name: 'cultof.art', status: 'enabled' }, { name: 'devops.codex.so', status: 'enabled' }, { name: 'github-service-hook.x.ifmo.su', status: 'enabled' } ]
      }
    }
  ]

};

const serverModule: Module<ServerModuleState, RootState> = {
  state,
  actions,
  mutations
};

export default serverModule;
