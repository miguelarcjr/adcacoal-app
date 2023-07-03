<template>
  <div>
    <div class="q-pa-md">
      <div class="row">
        <!-- <div class="col-12">
          <q-input
            color="teal"
            filled
            v-model="search"
            label="Procure um hino"
            dense
          >
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </div> -->
        <div class="col-12">
          <q-list bordered separator>
            <q-item
              clickable
              v-ripple
              v-for="(hino, index) in filteredBooks"
              :key="index"
              @click="selectBook(hino.id)"
            >
              <q-item-section>{{ hino.name }}</q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import hinosJson from 'src/shared/jsons/hinos.json';
import { useRouter } from 'vue-router';
import { useHarpaStore } from '../stores/harpa.store';
import { computed, reactive, ref } from 'vue';

const harpaStore = useHarpaStore();
const router = useRouter();
const hinos = reactive(
  hinosJson.map((item) => ({ ...item, name: item.id + ' - ' + item.title }))
);

const search = ref('');

const filteredBooks = computed(() => {
  return hinos.filter((item) => rC(item.name).includes(rC(search.value)));
});

function selectBook(numero: number) {
  harpaStore.setNumero(numero);
  router.push({ path: '/verso' });
}

//removerAcentos
function rC(texto: string) {
  return texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}
</script>

<style scoped></style>
