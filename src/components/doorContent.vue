<template>
  <div style="width: 100%; height: 100%">
    <div v-if="isLarge" class="largewrapper" style="width: 100%; height: 100%">
      <div class="content" @click="resize" :style="{'backgroundImage': `url(${imageUrl})`}"></div>
      <a :href="url" target="_blank">Open Link</a>
    </div>
    <div @click="enlarge" class="preview" :style="{'backgroundImage': `url(${imageUrl})`}"></div>
  </div>
</template>


<script>
import anime from "animejs/lib/anime.es";

export default {
  name: "doorContent",
  props: {
    imageUrl: String,
    url: String,
    id: Number
  },
  data: function() {
    return {
      calendar: null,
      isLarge: false
    };
  },
  computed: {
    isToday: function() {
      const day = this.calendar.todaysDay();
      return day === this.id;
    }
  },
  methods: {
    enlarge: function() {
      this.isLarge = true;
      anime({
        targets: ".largewrapper",
        right: 0,
        bottom: 0,
        easing: "easeInOutCubic",
        duration: 500
      });
    },
    resize: function(event) {
      if (event.target.nodeName !== "A") {
        anime({
          targets: ".largewrapper",
          right: -1000,
          bottom: -1000,
          easing: "easeInOutCubic",
          duration: 1000
        }).finished.then(() => {
          this.isLarge = false;
        });
      }
    }
  },
  created() {
    this.calendar = this.$calendar();
    if (this.isToday) {
      this.isLarge = true;
    }
  }
};
</script>

<style scoped>
.largewrapper {
  position: absolute;
  right: calc(-100vw);
  bottom: calc(-100hw);
}
.preview {
  cursor: pointer;
  display: block;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
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
  background-size: contain;
  background-color: var(--color3);
  border: 5px solid whitesmoke;
  background-repeat: no-repeat;
  background-position: center center;
}
.largewrapper:after {
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
.largewrapper:before {
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
a {
  color: whitesmoke;
  font-size: 20px;
}
</style>
