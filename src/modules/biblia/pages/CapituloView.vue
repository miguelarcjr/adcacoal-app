<template>
  <div>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-12">
          <q-toolbar class="text-primary">
            <q-btn @click="back" flat round dense icon="arrow_back" />
          </q-toolbar>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <q-list bordered separator>
            <q-item
              clickable
              v-ripple
              v-for="(lib, index) in livro?.chapters"
              :key="index"
              @click="selectChapter(lib)"
            >
              <q-item-section>{{ lib }}</q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import livros from 'src/shared/jsons/livros.json';
import { useRouter } from 'vue-router';
import { useBibliaStore } from '../stores/biblia.store';

const bibliaStore = useBibliaStore();
const { book } = storeToRefs(bibliaStore);
const router = useRouter();
const livro = livros.find((livroItem) => livroItem.name === book.value);
function selectChapter(chapter: number) {
  bibliaStore.setChapter(chapter);
  router.push({ path: '/leitura' });
}

function back() {
  router.push({ path: '/biblia' });
}
</script>

<style scoped></style>
