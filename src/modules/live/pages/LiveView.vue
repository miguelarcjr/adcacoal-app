<template>
  <div class="row">
    <div id="video-live" class="col-12 col-md-6">
      <keep-alive>
        <q-video
          :ratio="16 / 9"
          src="https://www.youtube.com/embed/videoseries?list=PL6B0srbh4gU8xSlfWooippn-N-NXmtDPi"
        />
      </keep-alive>
      <!-- <iframe src="https://www.youtube.com/embed/?listType=user_uploads&list=YOURCHANNELNAME" width="480" height="400"></iframe> -->

      <!-- <q-video
        :ratio="16 / 9"
        src="https://www.youtube.com/embed/live_stream?channel=UCLAJgcfXs0HIHphSZdGK3xw"
      /> -->
      <!-- <q-video
        :ratio="16 / 9"
        src="https://www.youtube.com/embed/live_stream?channel=UCF453hXTROcm9CfCERYUjtQ"
      /> -->
    </div>
    <div
      class="col-12 text-left content_area"
      style="padding-left: 19px; padding-top: 12px; padding-right: 19px"
    >
      <h6 style="padding-bottom: 12px">Marcados pelo Sangue</h6>
      <p>
        Ao aceitar Jesus em sua vida, você é marcado pelo sangue do cordeiro,
        simbolizando a redenção dos pecados e a renovação do espírito. Sua vida
        é transformada pela graça divina, e você se torna um filho de Deus.
      </p>
    </div>
    <div class="col-12">
      <h6 style="padding-left: 19px">Nosso Instagram</h6>
    </div>
    <div class="col-12">
      <keep-alive>
        <insta-feed />
      </keep-alive>
    </div>
  </div>
</template>

<script setup lang="ts">
import InstaFeed from 'src/shared/components/InstaFeed.vue';
import { onMounted } from 'vue';

const isLive = document.querySelector('#video-live') as Element;

onMounted(() => {
  console.log('testeee');
  setTimeout(() => {
    console.log('executou');
    const videoLive = document.querySelector('#video-live') as Element;
    videoLive.outerHTML.includes('indisponível');
    const iframe = document.querySelector('iframe') as HTMLIFrameElement;
    (iframe.contentWindow as Window).postMessage(
      '{"event":"command","func":"playVideo","args":""}',
      '*'
    );
  }, 10000);
  const live = document.querySelector('#video-live') as Element;
  console.log(live.outerHTML.includes('disponível'));
});
</script>

<style scoped>
h6 {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #522be6;
  margin: 0;
}

.content_area p {
  font-style: normal;
  font-weight: 400;
  font-size: 9px;
  line-height: 11px;

  color: #000000;
}
</style>
