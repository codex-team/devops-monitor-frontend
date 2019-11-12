<template>
  <div class="app">
    <div class="sidebar">
      <h2 class="sidebar-title">CodeX DevOops</h2>
      <div class="sidebar-menu">
        <a href="#">Servers Map</a>
        <a href="#">SSH keys</a>
      </div>
    </div>
    <div class="servers-map">
      <h1>Servers Map</h1>
      <div class="servers">
        <div class="server">
          <div class="header">
            <span>
              <h2 class="header-title">codex-kepler</h2>
              <span class="header-status background-ok"></span>
            </span>
            <div class="header-ip">15.213.199.12</div>
          </div>
          <div class="state">
            <span class="state-storage">Storage 28 GB / 30 GB</span>
            <span class="state-cpu">CPU load 12%</span>
          </div>
          <div class="nginx">
            <h2 class="nginx-title">Nginx</h2>
            <div class="nginx-apps">
              <span>alpha.hawk.so</span>
              <span class="offline">alpha.ifmo.su</span>
              <span class="offline">difual.com</span>
              <span>editorjs.io</span>
              <span>hawk.so</span>
              <span>ifmo.su</span>
            </div>
          </div>
          <div class="services">
            <h2 class="services-title">Services</h2>
            <div class="services-service">
              <span class="services-service-name">MongoDB</span>
              <span class="services-service-port color-ok">:2134</span>
            </div>
            <div class="services-service">
              <span class="services-service-name">Redis</span>
              <span class="services-service-port color-error">:6000</span>
            </div>
          </div>
          <div class="docker">
            <h2 class="docker-title">Docker</h2>
            <div class="docker-param">
              <span class="docker-param-name">cmtt_nginx</span>
              <span class="docker-param-days color-ok">4d</span>
            </div>
            <div class="docker-param">
              <span class="docker-param-name">cmtt_fpm</span>
              <span class="docker-param-days color-ok">4d</span>
            </div>
          </div>
        </div>
        <div class="server">
          <div class="header">
            <span>
              <h2 class="header-title">codex-neptune</h2>
              <span class="header-status background-error"></span>
            </span>
            <div class="header-ip">95.213.227.145</div>
          </div>
          <div class="state">
            <span class="state-storage">Storage 12 GB / 30 GB</span>
            <span class="state-cpu">CPU load 12%</span>
          </div>
          <div class="nginx">
            <h2 class="nginx-title">Nginx</h2>
            <div class="nginx-apps">
              <span>workers.hawk.so</span>
              <span>stage.hawk.so</span>
            </div>
          </div>
          <div class="services">
            <h2 class="services-title">Services</h2>
            <div class="services-service">
              <span class="services-service-name">MongoDB</span>
              <span class="services-service-port color-ok">:2134</span>
            </div>
            <div class="services-service">
              <span class="services-service-name">Redis</span>
              <span class="services-service-port color-error">:6000</span>
            </div>
          </div>
          <div class="docker">
            <h2 class="docker-title">Docker</h2>
            <div class="docker-param">
              <span class="docker-param-name">hawk_workers</span>
              <span class="docker-param-days color-ok">16d</span>
            </div>
            <div class="docker-param">
              <span class="docker-param-name">hawk_collector</span>
              <span class="docker-param-days color-ok">16d</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

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
  font-size: 14px;
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

.sidebar-title {
  font-weight: bold;
  margin-bottom: 15px;
}

.sidebar-menu a {
  display: block;
  margin-bottom: 10px;
}

.servers-map {
  border-left: 1px solid #e4e4e4;
  padding-left: 50px;
}

.servers-map h1 {
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

.header {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  margin-bottom: 15px;
}

.header-title {
  display: inline-block;
  margin-right: 10px;
  font-size: 18px;
  font-weight: bold;
}

.server:nth-child(odd) {
  margin-right: 25px;
}

.header-status {
  display: inline-block;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: #e4e4e4;
}

.background-ok {
  opacity: 0.6;
  background: #059721;
}

.background-error {
  opacity: 0.6;
  background: #bf0000;
}

.header-ip {
  font-size: 14px;
  padding: 3.5px 0;
  opacity: 0.6;
  display: inline-block;
}

.state {
  margin-bottom: 25px;
  font-size: 14px;
}

.state-storage {
  margin-right: 20px;
}

.state-storage,
.state-cpu {
  opacity: 0.6;
}

.nginx {
  margin-bottom: 25px;
}

.nginx-title,
.services-title,
.docker-title {
  margin-bottom: 15px;
  font-size: 12px;
  font-weight: 600;
  opacity: 0.6;
  text-transform: uppercase;
}

.nginx-apps span {
  display: inline-block;
  font-size: 13px;
  margin-right: 10px;
}

.offline {
  opacity: 0.6;
}

.color-ok {
  opacity: 0.6;
  color: #059721;
}

.color-error {
  opacity: 0.6;
  color: #bf0000;
}

.services {
  font-size: 13px;
  margin-bottom: 25px;
}

.services-service-name {
  margin-right: 10px;
}

.docker-param-name {
  margin-right: 10px;
}
</style>
