import { defineStore } from 'pinia';

export const useHarpaStore = defineStore('harpa', {
  state: () => ({
    numero: 0,
  }),
  actions: {
    setNumero(numero: number) {
      this.numero = numero;
    },
  },
});
