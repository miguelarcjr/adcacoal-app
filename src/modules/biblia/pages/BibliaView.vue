<template>
  <div>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-12">
          <q-input
            color="teal"
            filled
            v-model="search"
            label="Procure um livro"
            dense
          >
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
        <div class="col-12">
          <q-list bordered separator>
            <q-item
              clickable
              v-ripple
              v-for="(livro, index) in filteredBooks"
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
import livrosJson from 'src/shared/jsons/livros.json';
import { reactive, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useBibliaStore } from '../stores/biblia.store';

const livros = reactive(livrosJson);
const bibliaStore = useBibliaStore();
const router = useRouter();

const search = ref('');

const filteredBooks = computed(() => {
  return livros.filter((item) => rC(item.name).includes(rC(search.value)));
});

function selectBook(name: string) {
  bibliaStore.setBook(name);
  router.push({ path: '/capitulo' });
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
