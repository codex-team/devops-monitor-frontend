import { ActionTree } from 'vuex';
import axios from 'axios';
import { ServerState, Server } from './types';
import { RootState } from '../types';

/**
 * Get servers data from the back-end
 */
export const actions: ActionTree<ServerState, RootState> = {

  fetchData({ commit }): any {
    axios({
      url: 'https://....'
    }).then((response) => {
      const payload: Server = response && response.data;

      commit('serverLoaded', payload);
    }, (error) => {
      console.log(error);
      commit('loadingError');
    });
  }

};