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
      <div class="servers-map__add-server">
        <img
          class="add-server__image"
          src="./assets/koala_closed_eyes.svg"
        >
        <h2 class="add-server__header add-server__header--little-margin">
          Done!
        </h2>
        <p class="add-server__text">
          codex-kepler was added. Next you need to install the Collector script to your server.
        </p>
        <h3 class="add-server__small-header">
          Integration token
        </h3>
        <p class="add-server__integration-token">
          eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9qZWN0SWQiOiI1ZTNhYjliOWNkNmI3ODAwMjM3OGEzNjUiLCJpYXQiOjE1ODA5MDY5Mzd9.MQXPqBMEhwRyadPteDMhvepK_sMw_tzNHNcpER7IODY
        </p>
        <a
          class="add-server__guide"
          href="#"
        >Follow the installation guide</a>
        <a
          class="add-server__servers-list"
          href="/"
        >Go to servers list &raquo;</a>
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
@import url('https://fonts.googleapis.com/css?family=PT+Mono&display=swap');

.app {
  font-family: 'Roboto', sans-serif;
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
  padding: 60px 70px;
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
  display: block;
  font-size: 14px;
  border-radius: 3px;
  padding: 10px;
  color: #fff;
  outline: none;
  background-color: #43b1f6;
  border: 0;
  cursor: pointer;
}

.add-server__header--little-margin {
  margin-bottom: 10px;
}

.add-server__text {
  font-size: 15px;
  margin-bottom: 15px;
}

.add-server__integration-token {
  font-family: 'PT Mono', 'Roboto', sans-serif;
  width: 260px;
  border-radius: 3px;
  border: solid 1px rgba(0, 0, 0, 0.15);
  font-size: 12px;
  color: #712cab;
  word-wrap: break-word;
  padding: 9px 10px;
  margin-bottom: 20px;
}

.add-server__guide {
  display: inline-block;
  font-size: 15px;
  color: #0080d0;
  border-bottom: 1px dashed #0080d0;
  margin-bottom: 15px;
}

.add-server__servers-list {
  display: block;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.6);
}
</style>
