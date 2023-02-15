<template>
  <div>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-12">
          <q-list bordered separator>
            <q-item
              clickable
              v-ripple
              v-for="(hino, index) in hinos"
              :key="index"
              @click="selectBook(hino.id)"
            >
              <q-item-section>{{ hino.id }} - {{ hino.title }}</q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import hinos from 'src/shared/jsons/hinos.json';
import { useRouter } from 'vue-router';
import { useHarpaStore } from '../stores/harpa.store';

const harpaStore = useHarpaStore();
const router = useRouter();

function selectBook(numero: number) {
  harpaStore.setNumero(numero);
  router.push({ path: '/verso' });
}
</script>

<style scoped></style>
