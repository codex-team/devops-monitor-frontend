import axios from 'axios';
import { ActionTree } from 'vuex';
import { ServerModuleState } from './types';
import { RootState } from '../types';

/**
 * Get servers data from the back-end
 */
const API_URL = 'https://api.devops.codex.so';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZTI2YTliNzVhYjIyNjQ4MzhlODI3YTUiLCJpYXQiOjE1ODA5MDUzMzB9.0NH1KFEnv8IuVZAlPcZ7LOfmfzTsRyaPNV6f8l0xhMI';

axios.defaults.headers.common.authorization = 'Bearer ' + TOKEN;
const actions: ActionTree<ServerModuleState, RootState> = {
  /**
   * Fetch data about servers from API
   * Fetch services on every server
   */
  async fetchData({ commit }): Promise<void> {
    const serversList = await axios.get(API_URL + '/projects');

    var servers = serversList.data.data;
    /**
     * Get services and push it into server object
     */

    // console.log('Servers.data.data ', serversList.data.data[0]);
    for (let i = 0; i < servers.length; i++) {
      // console.log('Server token ', servers[i].token);

      await axios.get(API_URL + '/services', {
        params: {
          projectToken: servers[i].token
        }
      }).then(service => {
        service = service.data; // get data with statusCode and other data
        let payload = [];
        const dataLen = service.data.length;
        console.log(service);

        if (dataLen != 0) {
          // if we have useful payload
          payload = service.data[dataLen - 1].payload;
        } else {
          // if data is empty
          servers[i].services = {};
        }
        servers[i].services = payload;
      });
    }
    commit('setServersList', servers);
  },

  /**
   * Add project to server
   * @param serverName
   */
  async addServer({ commit }, serverName): Promise<void> {
    console.log('work pls ', serverName);
    await axios.post(API_URL + '/projects', {
      name: serverName
    }).then((res) => {
      // We can get status code
      if (res.data.statusCode != undefined && res.data.statusCode == 200) {}
    });
  }
};

export default actions;
