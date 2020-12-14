<template>
  <div id="video-container" class="video-container video-center">
    <main-video />
  </div>
</template>

<script>
import MainVideo from './components/MainVideo.vue';

export default {
  name: 'App',
  components: {
    MainVideo,
  },
};
</script>
