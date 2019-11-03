<template>
  <div class="calendar">
    <div class="doors">
      <template v-for="door in doors">
        <door v-bind="door" :key="door.id" />
      </template>
    </div>
    <div class="title">{{title}}</div>
  </div>
</template>

<script>
import { poem, doors } from "~/shared/content";
import doorComponent from "~/components/door";

export default {
  components: {
    door: doorComponent
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

<style lang="postcss" scoped>
.calendar {
  position: relative;
  width: 1241px;
  height: 100vh;
  background-image: url("~assets/images/ms-paint.png");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  margin: 0 auto;
}

.doors {
  position: absolute;
  top: calc(50% - 370px);
  left: 160px;
  width: 1030px;
  height: 630px;
  padding: 25px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 30px;
  grid-template-rows: repeat(5, 1fr);
}

.title {
  position: absolute;
  top: calc(50% - 465px);
  left: 60px;
  font-size: 30px;
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
