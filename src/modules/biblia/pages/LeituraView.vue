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
              v-ripple
              v-for="(versiculo, index) in versiculos"
              :key="index"
            >
              <q-item-section
                ><span
                  ><strong>{{ index+1 }}. </strong>{{ versiculo }}</span
                ></q-item-section
              >
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import biblia from 'src/shared/jsons/biblia.json';
import { useRouter } from 'vue-router';
import { useBibliaStore } from '../stores/biblia.store';

const bibliaStore = useBibliaStore();
const { book, chapter } = storeToRefs(bibliaStore);
const router = useRouter();

const versiculos = biblia.find((livro) => livro.name === book.value)?.chapters[
  chapter.value - 1
];

function back() {
  router.push({ path: '/capitulo' });
}
</script>

<style scoped></style>
