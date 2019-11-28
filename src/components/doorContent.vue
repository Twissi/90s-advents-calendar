<template>
  <div style="width: 100%; height: 100%">
    <div :ref="ref" class="contentwrapper">
      <div class="content" @click="resize">
        <div
          v-if="isImage"
          class="imagecontent"
          :style="{ backgroundImage: `url(${previewUrl})` }"
        ></div>
        <video v-if="isVideo" autoplay="false"><source :src="url" /></video>
        <div class="info">
          <a :href="url" target="_blank">Open in new window</a><br /><br />
          <span class="credits">credits: {{ credits }}</span>
        </div>
      </div>
    </div>
    <div
      @click="enlarge"
      class="preview"
      :style="{ backgroundImage: `url(${previewUrl})` }"
    ></div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es";
import uuid from "uuid/v1";

export default {
  name: "doorContent",
  props: {
    previewUrl: String,
    url: String,
    id: Number,
    credits: String,
    type: String
  },
  data: function() {
    return {
      calendar: null,
      ref: uuid()
    };
  },
  methods: {
    enlarge: function() {
      anime({
        targets: this.$refs[this.ref],
        right: 0,
        bottom: 0,
        easing: "easeInOutCubic",
        duration: 500
      });
    },
    resize: function(event) {
      if (event.target.nodeName !== "A") {
        anime({
          targets: this.$refs[this.ref],
          right: -1000,
          bottom: -1000,
          easing: "easeInOutCubic",
          duration: 1000
        });
      }
    },
    isImage: function() {
      console.log(this.type);
      return this.type === "image";
    },
    isVideo: function() {
      return this.type === "video";
    }
  }
};
</script>

<style scoped>
.preview {
  cursor: pointer;
  display: block;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.contentwrapper {
  position: absolute;
  right: calc(-100vw);
  bottom: calc(-100vw);
  width: 100%;
  height: 100%;
}
.contentwrapper:after {
  display: block;
  content: "";
  position: absolute;
  width: 70%;
  height: 70%;
  top: 85%;
  left: 15%;
  z-index: 50;
  transform-origin: 100% 0;
  transform: skewX(40deg);
  background: white;
  opacity: 0.7;
}
.contentwrapper:before {
  display: block;
  content: "";
  position: absolute;
  width: 70%;
  height: 70%;
  top: 15%;
  left: 85%;
  z-index: 50;
  transform-origin: 0 100%;
  transform: skewY(50deg);
  background: white;
  opacity: 0.9;
}
.content {
  cursor: pointer;
  display: block;
  width: 70%;
  height: 70%;
  position: absolute;
  top: 15%;
  left: 15%;
  margin: 0 auto;
  z-index: 100;
  border: 5px solid whitesmoke;
}
.imagecontent {
  width: 100%;
  height: 100%;
  background-size: contain;
  background-color: var(--color3);
  background-repeat: no-repeat;
  background-position: center center;
}
.info {
  position: absolute;
  text-align: center;
  color: black;
  bottom: -70px;
  width: 100%;
  text-align: center;
}
a {
  color: black;
  font-size: 20px;
}
</style>
