<template>
  <div class="app">
    <div class="sidebar">
      <h2 class="sidebar__title">CodeX DevOps</h2>
      <div class="sidebar__menu">
        <a href="#">Servers Map</a>
        <a href="#">SSH keys</a>
      </div>
    </div>
    <div class="servers-map">
      <h1>Servers Map</h1>
      <div class="server">
        <div class="server__header">
          <h2 class="server__header-title">codex-kepler</h2>
          <span class="server__header-status server__header-status--ok"></span>
          <div class="server__header-ip">15.213.199.12</div>
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
            <span class="section__service-name">MongoDB</span>
            <span class="section__service-port--ok">:2134</span>
          </div>
          <div class="section__service">
            <span class="section__service-name">Redis</span>
            <span class="section__service-port--error">:6000</span>
          </div>
        </div>
        <div class="section">
          <h2 class="section__title">Docker</h2>
          <div class="section__param">
            <span class="section__param-name">cmtt_section</span>
            <span class="section__param-days--ok">4d</span>
          </div>
          <div class="section__param">
            <span class="section__param-name">cmtt_fpm</span>
            <span class="section__param-days--ok">4d</span>
          </div>
        </div>
      </div>
      <div class="server">
        <div class="server__header">
          <h2 class="server__header-title">codex-neptune</h2>
          <span class="server__header-status server__header-status--error"></span>
          <div class="server__header-ip">95.213.227.145</div>
        </div>
        <div class="state">
          <span class="state__storage">Storage 12 GB / 30 GB</span>
          <span class="state__cpu state__cpu--error">CPU load 99%</span>
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
            <span class="section__service-name">MongoDB</span>
            <span class="section__service-port--ok">:2134</span>
          </div>
          <div class="section__service">
            <span class="section__service-name">Redis</span>
            <span class="section__service-port--error">:6000</span>
          </div>
        </div>
        <div class="section">
          <h2 class="section__title">Docker</h2>
          <div class="section__param">
            <span class="section__param-name">hawk_workers</span>
            <span class="section__param-days--ok">16d</span>
          </div>
          <div class="section__param">
            <span class="section__param-name">hawk_collection</span>
            <span class="section__param-days--ok">16d</span>
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
@import url('https://fonts.googleapis.com/css?family=Roboto:400,900&display=swap');

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

.server {
  border-radius: 6px;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px #e4e4e4;
  width: 450px;
  min-width: 250px;
  margin: 0 25px 25px 0;
  padding: 25px;
}

.server__header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}

.server__header-title {
  display: inline-block;
  margin-right: 10px;
  font-size: 18px;
  font-weight: bold;
}

.server:nth-child(odd) {
  margin-right: 25px;
}

.server__header-status {
  display: inline-block;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: #e4e4e4;
}

.server__header-status--ok {
  opacity: 0.6;
  background: #059721;
}

.server__header-status--error {
  opacity: 0.6;
  background: #bf0000;
}

.server__header-ip {
  margin-left: auto;
  font-size: 14px;
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

.state__cpu--error {
  color: #bf0000;
}

.section {
  font-size: 13px;
  margin-top: 25px;
}

.section__apps {
  margin-top: -9px;
}

.section__apps span {
  margin-top: 9px;
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

.section__service,
.section__param {
  margin-bottom: 9px;
}

.section__service-name {
  margin-right: 10px;
}

.section__param-name {
  margin-right: 10px;
}

.offline {
  opacity: 0.6;
}

.section__service-port--ok {
  opacity: 0.6;
  color: #059721;
}

.section__service-port--error {
  opacity: 0.6;
  color: #bf0000;
}

.section__param-days--ok {
  color: #059721;
}

.section__param-days--error {
  color: #bf0000;
}
</style>
