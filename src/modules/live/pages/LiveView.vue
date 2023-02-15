<template>
  <div class="row">
    <div class="col-12 col-md-6">
      <!-- <q-video
        :ratio="16 / 9"
        src="https://www.youtube.com/embed/live_stream?channel=UCLAJgcfXs0HIHphSZdGK3xw"
      /> -->
      <q-video
        :ratio="16 / 9"
        src="https://www.youtube.com/embed/live_stream?channel=UCF453hXTROcm9CfCERYUjtQ"
      />
    </div>
    <div class="col-12 text-center">
      <h6>CULTO AO VIVO</h6>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  console.log('testeee');
  setTimeout(() => {
    console.log('executou');
    const iframe = document.querySelector('iframe') as HTMLIFrameElement;
    (iframe.contentWindow as Window).postMessage(
      '{"event":"command","func":"playVideo","args":""}',
      '*'
    );
  }, 10000);
});
</script>

<style scoped></style>
