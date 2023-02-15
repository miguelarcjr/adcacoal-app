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
            <q-item v-ripple v-for="(letra, index) in letras" :key="index">
              <q-item-section
                ><span>{{ letra.verse }}</span></q-item-section
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
import versos from 'src/shared/jsons/versos.json';
import { useRouter } from 'vue-router';
import { useHarpaStore } from '../stores/harpa.store';

const harpaStore = useHarpaStore();
const { numero } = storeToRefs(harpaStore);
const router = useRouter();
const letras = versos.filter((item) => item.id_hino === numero.value);

function back() {
  router.push({ path: '/hino' });
}
</script>

<style scoped></style>
