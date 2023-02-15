import { defineStore } from 'pinia';

export const useBibliaStore = defineStore('biblia', {
  state: () => ({
    book: '',
    chapter: 0,
  }),
  actions: {
    setBook(name: string) {
      this.book = name;
    },
    setChapter(chapter: number) {
      this.chapter = chapter;
    },
  },
});
