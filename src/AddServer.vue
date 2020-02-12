<template>
  <div class="app">
    <Sidebar />
    <div class="servers-map">
      <Header />
      <div class="servers-map__add-server">
        <img
          class="add-server__image"
          src="./assets/koala_open_eyes.svg"
        >
        <h2 class="add-server__header">
          Adding a new server
        </h2>
        <h3 class="add-server__small-header">
          Server name
        </h3>
        <input
          type="text"
          class="add-server__server-name"
          placeholder="codex-kepler"
        >
        <button class="add-server__button">
          Add server
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue';
import { State, Action } from 'vuex-class';

@Component({
  components: {
    Sidebar,
    Header
  }
})
/**
 * App component
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

.servers-map__add-server {
  border-radius: 6px;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px #e4e4e4;
  width: 450px;
  min-width: 250px;
  margin: 0 25px 25px 0;
  padding: 60px 90px;
}

.add-server__image {
  display: block;
  margin-bottom: 15px;
}

.add-server__header {
  font-size: 17px;
  color: #000;
  margin-bottom: 30px;
}

.add-server__small-header {
  text-transform: uppercase;
  font-size: 12px;
  color: #000;
  opacity: 0.6;
  margin-bottom: 10px;
}

.add-server__server-name {
  border-radius: 3px;
  border: solid 1px rgba(0, 0, 0, 0.15);
  padding: 9px 10px;
  width: 260px;
  font-size: 14px;
  margin-bottom: 20px;
}

.add-server__button {
  font-size: 14px;
  border-radius: 3px;
  padding: 10px;
  color: #fff;
  outline: none;
  background-color: #43b1f6;
  border: 0;
  cursor: pointer;
}
</style>
