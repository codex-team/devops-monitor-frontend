<template>
  <div class="app">
    <div class="sidebar">
      <h2 class="sidebar__title">CodeX DevOops</h2>
      <div class="sidebar__menu">
        <a href="#">Servers Map</a>
        <a href="#">SSH keys</a>
      </div>
    </div>
    <div class="servers_map">
      <h1>Servers Map</h1>
      <div class="servers">
        <div class="server">
          <div class="server__header">
            <span>
              <h2 class="server__header_title">codex-kepler</h2>
              <span class="server__header_status background_ok"></span>
            </span>
            <div class="server__header_ip">15.213.199.12</div>
          </div>
          <div class="state">
            <span class="state__storage">Storage 28 GB / 30 GB</span>
            <span class="state__cpu">CPU load 12%</span>
          </div>
          <div class="section">
            <h2 class="section__title">Nginx</h2>
            <div class="section__apps">
              <span>alpha.hawk.so</span>
              <span class="offline">alpha.ifmo.su</span>
              <span class="offline">difual.com</span>
              <span>editorjs.io</span>
              <span>hawk.so</span>
              <span>ifmo.su</span>
            </div>
          </div>
          <div class="section">
            <h2 class="section__title">Services</h2>
            <div class="section__service">
              <span class="section__service_name">MongoDB</span>
              <span class="section__service_port_color_ok">:2134</span>
            </div>
            <div class="section__service">
              <span class="section__service_name">Redis</span>
              <span class="section__service_port_color_error">:6000</span>
            </div>
          </div>
          <div class="section">
            <h2 class="section__title">Docker</h2>
            <div class="section__param">
              <span class="section__param_name">cmtt_section</span>
              <span class="section__param_days_color_ok">4d</span>
            </div>
            <div class="section__param">
              <span class="section__param_name">cmtt_fpm</span>
              <span class="section__param_days_color_ok">4d</span>
            </div>
          </div>
        </div>
        <div class="server">
          <div class="server__header">
            <span>
              <h2 class="server__header_title">codex-neptune</h2>
              <span class="server__header_status server__header_status_background_error"></span>
            </span>
            <div class="server__header_ip">95.213.227.145</div>
          </div>
          <div class="state">
            <span class="state__storage">Storage 12 GB / 30 GB</span>
            <span class="state__cpu state__cpu_color_error">CPU load 99%</span>
          </div>
          <div class="section">
            <h2 class="section__title">Nginx</h2>
            <div class="section__apps">
              <span>workers.hawk.so</span>
              <span>stage.hawk.su</span>
            </div>
          </div>
          <div class="section">
            <h2 class="section__title">Services</h2>
            <div class="section__service">
              <span class="section__service_name">MongoDB</span>
              <span class="section__service_port_color_ok">:2134</span>
            </div>
            <div class="section__service">
              <span class="section__service_name">Redis</span>
              <span class="section__service_port_color_error">:6000</span>
            </div>
          </div>
          <div class="section">
            <h2 class="section__title">Docker</h2>
            <div class="section__param">
              <span class="section__param_name">hawk_workers</span>
              <span class="section__param_days_color_ok">16d</span>
            </div>
            <div class="section__param">
              <span class="section__param_name">hawk_collection</span>
              <span class="section__param_days_color_ok">16d</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

// import Server from "./components/Server.vue";

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

.sidebar {
  min-width: 80px;
  margin-right: 40px;
  padding-top: 1rem;
  font-size: 16px;
}

.sidebar__title {
  font-weight: bold;
  margin-bottom: 15px;
}

.sidebar__menu a {
  display: block;
  margin-bottom: 10px;
}

.servers_map {
  border-left: 1px solid #e4e4e4;
  padding-left: 50px;
}

.servers_map h1 {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
}

.servers {
  display: flex;
  flex-wrap: wrap;
  background: #ff000000;
}

.server {
  border-radius: 6px;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px #e4e4e4;
  width: 450px;
  min-width: 250px;
  margin-bottom: 25px;
  padding: 25px;
  line-height: 1.6;
}

.server__header {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  margin-bottom: 15px;
}

.server__header_title {
  display: inline-block;
  margin-right: 10px;
  font-size: 18px;
  font-weight: bold;
}

.server:nth-child(odd) {
  margin-right: 25px;
}

.server__header_status {
  display: inline-block;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: #e4e4e4;
}

.background_ok {
  opacity: 0.6;
  background: #059721;
}

.server__header_status_background_error {
  opacity: 0.6;
  background: #bf0000;
}

.server__header_ip {
  font-size: 14px;
  padding: 3.5px 0;
  opacity: 0.6;
  display: inline-block;
}

.state {
  margin-bottom: 25px;
  font-size: 14px;
}

.state__storage {
  margin-right: 20px;
}

.state__storage,
.state__cpu {
  opacity: 0.6;
}

.state__cpu_color_error {
  color: #bf0000;
}

.section {
  font-size: 13px;
  margin-bottom: 25px;
}

.section__apps span {
  display: inline-block;
  margin-right: 10px;
}

.section__title {
  margin-bottom: 15px;
  font-size: 12px;
  font-weight: 600;
  opacity: 0.6;
  text-transform: uppercase;
}

.section__service_name {
  margin-right: 10px;
}

.section__param_name {
  margin-right: 10px;
}

.offline {
  opacity: 0.6;
}

.section__service_port_color_ok,
.section__param_days_color_ok {
  opacity: 0.6;
  color: #059721;
}

.section__service_port_color_error,
.section__param_days_color_error {
  opacity: 0.6;
  color: #bf0000;
}

</style>
