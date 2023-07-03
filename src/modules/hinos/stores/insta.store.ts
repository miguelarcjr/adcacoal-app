import { InstaPost } from './../../../shared/components/interfaces/instapost.interface';
import { defineStore } from 'pinia';

export const useInstaStore = defineStore('insta', {
  state: () => ({
    posts: [] as InstaPost[],
  }),
  actions: {
    setPosts(posts: InstaPost[]) {
      this.posts = posts;
    },
  },
});
