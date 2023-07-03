<template>
  <q-toolbar class="text-primary">
    <q-toolbar-title> <div class="topbar_logo"></div> </q-toolbar-title>
    <!-- <q-btn flat round dense :icon="'img:' + bellUrl" /> -->
    <!-- {{ imgUrl }} -->
  </q-toolbar>
</template>

<script setup lang="ts">
import bellUrl from 'src/assets/icons/bell.svg';
</script>

<style scoped>
.topbar_logo {
  /* background-color: rgba(255, 106, 106, 0.301); */
  background: url('../../../assets/logo.svg');
  width: 100px;
  height: 30px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

nav .q-toolbar {
  padding: 0 20px;
}
</style>
