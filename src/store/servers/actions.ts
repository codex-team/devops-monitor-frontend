import axios from 'axios';
import { ActionTree } from 'vuex';
import { ServerModuleState } from './types';
import { RootState } from '../types';

/**
 * Get servers data from the back-end
 */
const API_URL = 'https://api.devops.codex.so';

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZTI2YTliNzVhYjIyNjQ4MzhlODI3YTUiLCJpYXQiOjE1ODA5MDUzMzB9.0NH1KFEnv8IuVZAlPcZ7LOfmfzTsRyaPNV6f8l0xhMI';
const actions: ActionTree<ServerModuleState, RootState> = {
  /**
   * Fetch data about servers from API
   * Fetch services on every server
   */
  async fetchData({ commit }): Promise<void> {
    const serversList = await axios.get(API_URL + '/projects', {
      headers: {
        authorization: 'Bearer ' + TOKEN
      }
    });

    var servers = serversList.data.data;
    /**
     * Get services and push it into server object
     */

    console.log('Servers.data.data ', serversList.data.data[0]);
    for (let i = 0; i < servers.length; i++) {
      console.log('Server token ', servers[i].token);

      await axios.get(API_URL + '/services', {
        params: {
          projectToken: servers[i].token
        },
        headers: {
          authorization: 'Bearer ' + TOKEN
        }
      }).then(service => {
        service = service.data; // get data with statusCode and other data
        let payload = [];

        if (service.data.length != 0) {
          // if we have useful payload
          payload = service.data[0].payload;
        } else {
          // if data is empty
          servers[i].services = {};
        }
        servers[i].services = payload;
      });
    }
    commit('setServersList', servers);
  }
};

export default actions;
