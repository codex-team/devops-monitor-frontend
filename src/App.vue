<template>
  <div class="app">
    <Sidebar />
    <div class="servers-map">
      <h1>Servers Map</h1>
      <Server/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Sidebar from './components/Sidebar.vue';
import Server from './components/Server.vue';

@Component({
  components: {
    Sidebar,
    Server
  }
})

/**
 * export class App
 */
export default class App extends Vue {}
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
