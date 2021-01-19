<template>
  <a
    :href="previewLink"
    :style="{ 'width': width + 'px', 'height': height + 'px' }"
    class="video-wrapper mb-3"
  >
    <video
      :id="`main-video`"
      ref="videoPlayer"
      class="video video-js"
      preload="auto"
    ></video>

    <div class="video-block">
      <div class="video-price">
        <span class="video-price__crossed strikethrough">{{oldPrice}}</span>
        <span class="video-price__main">{{newPrice}}</span>
      </div>
    </div>

  </a>
</template>

<script>
export default {
  name: 'main-video',

  props: ['name'],

  data () {
    return {
      player: null,
      width: 0,
      height: 0,
      oldPrice: '',
      newPrice: '',
      previewLink: '',
      purchaseLink: '',

      videoOptions: {
        loop: true,
        muted: true,
        autoplay: false,
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
    this.videoOptions.sources[0].src = window[this.name].mainVideo;
    this.oldPrice = window[this.name].oldPrice;
    this.newPrice = window[this.name].newPrice;
    this.previewLink = window[this.name].previewLink;
    this.purchaseLink = window[this.name].purchaseLink;
  },

  mounted () {
    const containerWidth = document.getElementById('video-container').innerWidth;

    this.height = Math.round(window.innerHeight * 0.8);
    this.width = (this.height / 3 * 2) > containerWidth ? containerWidth : Math.round(this.height / 3 * 2);

    const videojs = window.videojs;
    this.player = videojs(this.$refs.videoPlayer, this.videoOptions, function () {
      this.play();
    })
  },
  beforeDestroy () {
    if (this.player) {
      this.player.dispose()
    }
  },
};
</script>
