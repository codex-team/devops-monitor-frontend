<template>
  <div class="server">
    <div class="server__header">
      <h2 class="server__header-title">
        {{ server.name }}
      </h2>
      <span class="server__header-status server__header-status--ok" />
      <div class="server__header-ip">
        15.213.199.12
      </div>
    </div>
    <div class="state">
      <span class="state__storage">Storage 28 GB / 30 GB</span>
      <span class="state__cpu">CPU load 12%</span>
    </div>
    <div class="section">
      <h2 class="section__title">
        Websites
      </h2>
      <div class="section__apps">
        <span
          v-for="(site, index) in server.services.websites"
          :key="index"
          :class="{ 'section__apps-site--offline' : site.status != 'enabled' }"
        >{{ site.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Server } from '@/store/servers/types';

@Component
/**
 * Component for displaying server info
 */
export default class ServerDetail extends Vue {
  @Prop({
    type: Object,
    required: true
  })
  /**
   * Server to display
   */
  readonly server: Server | undefined;
}
</script>

<style>
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
.section__container {
  margin-bottom: 9px;
}

.section__service-name {
  margin-right: 10px;
}

.section__container-name {
  margin-right: 10px;
}

.section__apps-site--offline {
  opacity: 0.6;
}

.section__container-status--ok {
  opacity: 0.6;
  color: #059721;
}

.section__container-status--error {
  opacity: 0.6;
  color: #bf0000;
}
</style>
