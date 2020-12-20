<template>
  <div
    :style="{ 'width': width + 'px', 'height': height + 'px' }"
    class="video-wrapper mb-3"
    @click="redirect"
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
      <div class="video-buttons">
        <button
          class="video-buttons__item"
          @click.stop="addToCart"
        >
          Add to Сart
        </button>
        <a
          :href="previewLink"
          class="video-buttons__item"
        >
          Preview
        </a>
      </div>
    </div>

  </div>
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
  methods: {
    redirect () {
      document.location.assign(this.previewLink)
    },
    addToCart () {
      console.log('add to cart')
    },
  }
};
</script>
