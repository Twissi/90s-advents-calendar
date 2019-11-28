<template>
  <div class="calendar">
    <span class="poem">{{ poem }}</span>
    <div class="doors">
      <template v-for="door in doors">
        <door :key="door.id" :content-id="door.id" />
      </template>
    </div>
    <div class="title">{{ title }}</div>
    <santa />
  </div>
</template>

<script>
import { poem, doors } from "~/shared/content";
import DoorComponent from "~/components/door";
import Santa from "~/components/santa";

export default {
  components: {
    door: DoorComponent,
    santa: Santa
  },
  name: "Calendar",
  data: function() {
    return {
      poem: poem,
      doors: doors,
      calendar: null
    };
  },
  computed: {
    title: function() {
      const daysBefore = this.calendar.daysBeforeChristmas();
      if (!daysBefore) {
        return `Not yet ... come back in december`;
      }
      if (daysBefore === 1) {
        return `${daysBefore} day before christmas`;
      }
      return `${daysBefore} days before christmas`;
    }
  },
  created: function() {
    this.calendar = this.$calendar();
  }
};
</script>

<style scoped>
.calendar {
  position: relative;
  width: auto;
  height: 100vh;
  /* background-image: url("~static/images/ms-paint.png"); */
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
}

.doors {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 100px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 30px;
  grid-template-rows: repeat(5, 1fr);
}

.poem {
  font-size: 90px;
  opacity: 0.2;
  overflow: hidden;
}

.title {
  position: absolute;
  top: 30px;
  left: 150px;
  font-size: 30px;
  color: snow;
}

p {
  font-size: 100px;
  font-weight: 800;
  letter-spacing: 0.1em;
  line-height: 150px;
  padding: 0 30% 0 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
