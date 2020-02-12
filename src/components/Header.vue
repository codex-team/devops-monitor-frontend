<template>
  <div class="header">
    <h1>Servers Map</h1>
    <a
      class="header__add-server"
      href="/addServer.html"
    >Add a server</a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component

/**
 * export class Header
 */
export default class Header extends Vue {}
</script>

<style scoped>
.header h1 {
  margin-right: 20px;
  font-size: 28px;
  font-weight: 900;
}

.header__add-server {
  text-transform: uppercase;
  font-size: 11px;
  padding: 6px 8px;
  color: rgba(0, 0, 0, 0.6);
  border-radius: 3px;
  border: solid 1px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  cursor: pointer;
}

.header {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
  width: 100%;
  align-items: center;
}
</style>