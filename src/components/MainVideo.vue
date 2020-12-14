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

    <div class="video-block">
      <div class="video-price">
        <span class="video-price__crossed strikethrough">{{oldPrice}}</span>
        <span class="video-price__main">{{newPrice}}</span>
      </div>
      <div class="video-buttons">
        <button class="video-buttons__item">
          Add to Сart
        </button>
        <button class="video-buttons__item">
          Preview
        </button>
      </div>
    </div>

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
      oldPrice: '',
      newPrice: '',

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
    this.oldPrice = window.oldPrice;
    this.newPrice = window.newPrice;
  },

  mounted () {
    const containerWidth = document.getElementById('container').innerWidth;

    this.height = Math.round(window.innerHeight * 0.8);
    this.width = (this.height / 3 * 2) > containerWidth ? containerWidth : Math.round(this.height / 3 * 2);

    const videojs = window.videojs;
    this.player = videojs(this.$refs.videoPlayer, this.videoOptions)
  },
  beforeDestroy () {
    if (this.player) {
      this.player.dispose()
    }
  },
};
</script>
