<template>
  <div class="basic-container">
    <div
      id="video-container"
      class="video-container video-center"
    >
      <main-video :name="name" />
    </div>
  </div>
</template>

<script>
import MainVideo from './components/MainVideo.vue';

export default {
  name: 'App',
  components: {
    MainVideo,
  },
  props: ['name']
};
</script>
