<template>
  <div class="home_container">
    <nav>
      <q-toolbar class="bg-primary text-white">
        <q-btn flat round dense icon="local_fire_department" />
        <q-toolbar-title> AD Cacoal </q-toolbar-title>
        <!--         <q-btn flat round dense icon="more_vert" />
 -->
      </q-toolbar>
    </nav>
    <div class="content_container">
      <router-view />
    </div>
    <footer class="navbar">
      <q-tabs v-model="tab" class="bg-primary text-white shadow-2">
        <q-tab
          name="/live"
          icon="live_tv"
          label="Ao vivo"
          @click="go('/live')"
        />
        <q-tab
          name="/biblia"
          icon="fa fa-book-bible"
          label="Bíblia"
          @click="go('/biblia')"
        />
        <q-tab
          name="/hino"
          icon="music_note"
          label="Harpa"
          @click="go('/hino')"
        />
        <q-tab
          name="/agenda"
          icon="event"
          label="Agenda"
          @click="go('/agenda')"
        />
      </q-tabs>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

import { ref } from 'vue';

const tab = ref('/live');
const router = useRouter();

function go(path: string) {
  tab.value = path;
  router.push(path);
}
</script>

<style scoped>
.home_container {
  display: grid;
  flex-flow: column wrap;
  height: 100vh;
  grid-template-rows: 50px 1fr 72px;
}

.content_container {
  overflow: auto;
}
</style>
