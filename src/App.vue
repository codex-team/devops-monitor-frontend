<template>
  <div class="app">
    <Sidebar />
    <div class="servers-map">
      <h1>Servers Map</h1>
      <Server
        v-for="(server, index) in servers.list"
        :key="index"
        :server="server"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Sidebar from './components/Sidebar.vue';
import Server from './components/Server.vue';
import { State, Action } from 'vuex-class';
import { ServerModuleState } from '@/store/servers/types';

@Component({
  components: {
    Sidebar,
    Server
  }
})
/**
 * App component
 */
export default class App extends Vue {
  /**
   * Representation of group of servers
   */
  @State('servers')
  servers: ServerModuleState | undefined;

  /**
   * Function for fetching data about servers from API
   */
  @Action('fetchData')
  fetchServersData!: () => Promise<void>;

  /**
   * Load data about servers when app is mounted
   */
  mounted() {
    this.fetchServersData();
  }
}
</script>

<style>
@import "~minireset.css/minireset.min.css";

.app {
  font-family: Roboto, sans-serif;
  font-size: 13px;
  color: #000000;
  padding: 30px;
  display: flex;
  justify-content: center;
}

a {
  text-decoration: none;
  color: #000000;
}

.servers-map {
  display: flex;
  flex-wrap: wrap;
  border-left: 1px solid #e4e4e4;
  padding-left: 50px;
}

.servers-map h1 {
  flex-basis: 100%;
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 20px;
}
</style>
