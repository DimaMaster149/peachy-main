<template>
  <div
    :style="{ 'width': width + 'px', 'height': height + 'px' }"
    class="video-wrapper mb-3"
  >

    <video
      :id="`main-video`"
      ref="videoPlayer"
      class="video video-js"
    ></video>

  </div>
</template>

<script>
export default {
  name: 'main-video',

  data () {
    return {
      player: null,
      width: 0,
      height: 0,

      videoOptions: {
        muted: true,
        autoplay: true,
        sources: [
          {
            src: '',
            type: "video/mp4"
          }
        ]
      },
    };
  },

  created () {
    this.videoOptions.sources[0].src = window.mainVideo;
  },

  mounted () {
    this.width = 400;
    this.height = 600;
    const videojs = window.videojs;
    this.player = videojs(this.$refs.videoPlayer, this.videoOptions, () => {
      console.log('player ready')
    })
  },
  beforeDestroy () {
    if (this.player) {
      this.player.dispose()
    }
  },
};
</script>
