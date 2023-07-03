<template>
  <q-tabs
    v-model="tab"
    class="bg-primary text-white shadow-2"
    :inline-label="isSmallScreenHeight"
  >
    <q-tab
      name="/live"
      :icon="'img:' + homeUrl"
      label="Início"
      @click="go('/live')"
    />
    <q-tab
      name="/biblia"
      :icon="'img:' + bookUrl"
      label="Bíblia"
      @click="go('/biblia')"
    />
    <q-tab
      name="/hino"
      :icon="'img:' + musicUrl"
      label="Harpa"
      @click="go('/hino')"
    />
    <q-tab
      name="/agenda"
      :icon="'img:' + clockUrl"
      label="Agenda"
      @click="go('/agenda')"
    />
  </q-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import homeUrl from 'src/assets/icons/home.svg';
import bookUrl from 'src/assets/icons/book.svg';
import clockUrl from 'src/assets/icons/clock.svg';
import musicUrl from 'src/assets/icons/music.svg';

const tab = ref('/live');
const router = useRouter();
const isSmallScreenHeight = window.screen.height < 800;

function go(path: string) {
  tab.value = path;
  router.push(path);
}
</script>

<style>
.q-tab__content .q-tab__label {
  font-size: 8px;
  margin-top: 7px;
}
</style>
