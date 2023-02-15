<template>
  <div>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-12">
          <q-list bordered separator>
            <q-item
              clickable
              v-ripple
              v-for="(livro, index) in livros"
              :key="index"
              @click="selectBook(livro.name)"
            >
              <q-item-section>{{ livro.name }}</q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import livros from 'src/shared/jsons/livros.json';
import { useRouter } from 'vue-router';
import { useBibliaStore } from '../stores/biblia.store';

const bibliaStore = useBibliaStore();
const router = useRouter();

function selectBook(name: string) {
  bibliaStore.setBook(name);
  router.push({ path: '/capitulo' });
}
</script>

<style scoped></style>
