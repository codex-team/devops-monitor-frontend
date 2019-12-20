import axios from 'axios';
import { ActionTree } from 'vuex';
import { ServerModuleState } from './types';
import { RootState } from '../types';

/**
 * Get servers data from the back-end
 */
const API_URL = 'https://api.devops.codex.so/';

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZGY3YzE3ODIyMTIwZDQ3M2ZjMzgwODciLCJpYXQiOjE1NzY3NTQ1NDZ9.W4h2YNVftXaoHi9yBCjaaiHvtS7EY32dGF-5ZE0BWYk';

const actions: ActionTree<ServerModuleState, RootState> = {
  /**
   * Fetch data about servers from API
   * Fetch services on every server
   */
  async fetchData({ commit }): Promise<void> {
    const serversList = await axios.get(API_URL + 'projects', {
      headers: { authorization: 'Bearer ' + TOKEN }
    });

    var servers = serversList.data.data;
    /**
     * Get services and push it into server object
     */

    console.log('Servers.data.data ', serversList.data.data[0]);
    for (let i = 0; i < servers.length; i++) {
      console.log('Server token ', servers[i].token);

      const service = await axios.get(API_URL + 'services', {
        headers: {
          authorization: 'Bearer ' + TOKEN
        },
        params: {
          projectToken: servers[i].token
        }
      });

      console.log('Service.data ', JSON.stringify(service.data));
      servers[i].services = service;
    }
    commit('setServersList', servers);
  }
};

export default actions;
