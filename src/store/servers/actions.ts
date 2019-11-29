import axios from 'axios';
import { ActionTree } from 'vuex';
import { ServerModuleState } from './types';
import { RootState } from '../types';

/**
 * Get servers data from the back-end
 */
const API_URL = 'https://api.devops.codex.so/projects';

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZGUwMTQyMjg1OGEyNDc4ZGVjZjYzMTkiLCJpYXQiOjE1NzQ5NjY1NDF9.8VMzdHhV45TAYxHq4tvkr_mX_6aOjB93v9u1yXCUnYA';

const actions: ActionTree<ServerModuleState, RootState> = {
  /**
   * Fetch data about servers from API
   */
  async fetchData({ commit }): Promise<void> {
    const serversList = await axios.get(API_URL, {
      headers: { authorization: 'Bearer ' + TOKEN }
    });

    commit('setServersList', serversList.data);
  }
};

export default actions;
