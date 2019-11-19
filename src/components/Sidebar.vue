<template>
  <div class="sidebar">
    <h2 class="sidebar__title">{{ header }}</h2>
    <div class="sidebar__menu">
      <a href="#">Servers Map</a>
      <a href="#">SSH keys</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component

/**
 * export class Sidebar
 */
export default class Sidebar extends Vue {
  public header: string = "CodeX DevOps";
}
</script>

<style scoped>
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
</style>