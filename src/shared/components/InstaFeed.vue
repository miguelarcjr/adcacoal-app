<template>
  <!-- <div class="instagram-feed">
    <div class="instagram-post" style="border: none">
      <div class="instagram-post-header">
        <img
          :src="logoUrl"
          class="instagram-profile-picture"
          alt="Profile picture"
        />

        <div class="instagram-post-user">
          <span class="instagram-username">adcacoal</span>
        </div>
      </div>
      <div class="instagram-post-image">
        <q-carousel
          swipeable
          animated
          v-model="slide"
          navigation
          infinite
          :autoplay="autoplay"
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
        >
          <q-carousel-slide
            v-for="post in feedPosts"
            :key="post.id"
            :name="post.id"
            :img-src="post.image"
          />
        </q-carousel>
      </div>
    </div>
  </div> -->
  <div class="instagram-items">
    <div class="instagram-feed">
      <div v-for="post in posts" :key="post.id" class="instagram-post">
        <div class="instagram-post-header">
          <img
            :src="logoUrl"
            class="instagram-profile-picture"
            alt="Profile picture"
          />
          <div class="instagram-post-user">
            <span class="instagram-username">{{ post.user.username }}</span>
          </div>
        </div>
        <img :src="post.image" class="instagram-post-image" alt="Post image" />
        <div class="instagram-post-footer">
          <div class="instagram-post-caption">
            {{
              post.caption
                ? post.caption.length > 200
                  ? post.caption.slice(0, 200) + '...'
                  : post.caption
                : post.caption
            }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { InstaResponse } from './interfaces/instagram.interface';
import { InstaPost } from './interfaces/instapost.interface';
import logoUrlBase from 'src/assets/logo.svg';
import { useInstaStore } from 'src/modules/hinos/stores/insta.store';
import { storeToRefs } from 'pinia';

export default {
  name: 'InstagramFeed',
  data() {
    const instaStore = useInstaStore();
    const { posts } = storeToRefs(instaStore);
    return {
      instaStore,
      feedPosts: [] as any[],
      posts,
      slide: 1,
      autoplay: true,
      logoUrl: logoUrlBase,
    };
  },
  mounted() {
    const token =
      'IGQVJXMUVheU92SXN6azg4bmNkbFhqdlhuZAHNPb0tabE9IMFBWUi1XZAjdGSkxvLUE4LTFMWU5VMTdoNEZAlU2pNUkFKblFkSG51a0M0YlY1dVJMVzFraDVWMHhNSW1TZA1VrdHdacGVZAWEhvSHdOUEJoUwZDZD';
    const instance = axios.create({
      baseURL: 'https://graph.instagram.com',
    });

    instance
      .get(
        `/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${token}`
      )
      .then((result) => {
        const res: any = result.data;
        console.log('VOCE E O CARAAAAAAAAAAAAAAA');
        console.log(res);
        //onde fica os posts
        const posts = [] as InstaPost[];
        res.data.forEach((item) => {
          console.log('item');
          console.log(item);
          const post: InstaPost = {
            id: item.id,
            caption: item.caption,
            image: item.thumbnail_url ? item.thumbnail_url : item.media_url,
            post_id: item.id,
            post_link: item.permalink,
            user: {
              username: 'adcacoal',
              profilePicture: 'src/assets/logo.svg',
            },
          };
          posts.push(post);
        });
        //this.posts = [...posts];
        this.instaStore.setPosts([...posts]);
        //this.instaStore.setPosts(posts);
        this.feedPosts = [...posts.splice(0, 6)];
      })
      .catch((err) => {
        throw err;
      });
    //InstaResponse
  },
};
</script>

<style scoped>
.instagram-feed {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
}

.instagram-post {
  display: flex;
  flex-direction: column;
  margin: 10px;
  max-width: 300px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
}

.instagram-post-header {
  display: flex;
  align-items: center;
  padding: 10px;
}

.instagram-profile-picture {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}

.instagram-post-user {
  display: flex;
  flex-direction: column;
}

.instagram-username {
  font-weight: bold;
  margin-bottom: 5px;
}

.instagram-location {
  color: #999999;
}

.instagram-post-image {
  width: 300px;
  height: 300px;
  object-fit: cover;
}

.instagram-post-footer {
  padding: 10px;
}

.instagram-post-actions {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.instagram-post-actions i {
  margin-right: 10px;
}

.instagram-post-likes {
  font-weight: bold;
  margin-bottom: 5px;
}

.instagram-post-caption {
  margin-bottom: 5px;
}

.instagram-comment {
  margin-bottom: 5px;
}

.instagram-comment-username {
  font-weight: bold;
  margin-right: 5px;
}

.q-carousel {
  height: 100% !important;
  border-radius: 17px;
}

.instagram-items {
  display: flex;
  width: 100%;
  max-width: 100vw;
  overflow-x: auto;
}
</style>
