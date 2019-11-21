<template>
  <div
    :class="[style, {'animated shake': shake}, {'animated bounceIn': bounce}]"
    @click="clickDoor"
  >
    <doorContent v-if="open" v-bind="door" />

    <span class="door-number">{{contentId}}</span>
  </div>
</template>

<script>
import { doors } from "~/shared/content";
import doorContent from "~/components/doorContent";

export default {
  name: "Door",
  components: { doorContent },
  data: () => {
    return {
      open: false,
      shake: false,
      bounce: false,
      calendar: null
    };
  },
  props: {
    contentId: Number
  },
  computed: {
    door: function() {
      const contentId = this.contentId;
      if (this.isToday || this.isPast) {
        return doors.find(door => {
          return door.id === contentId;
        });
      }
      return null;
    },
    style: function() {
      const doorClasses = `door door-${String(this.contentId)}`;
      if (this.open) {
        return doorClasses + ` open`;
      }
      return doorClasses;
    },
    isToday: function() {
      const day = this.calendar.todaysDay();
      return day === this.contentId;
    },
    isPast: function() {
      if (!this.calendar.isDecember()) {
        return false;
      }

      const day = this.calendar.todaysDay();
      return this.contentId < day;
    }
  },
  methods: {
    clickDoor: function() {
      if (!this.calendar.isDecember()) {
        return this.animate("shake");
      }

      if (this.isToday && !this.open) {
        this.open = true;
      } else if (!this.isPast && !this.open) {
        this.animate("shake");
      }
    },
    animate: function(animationProp) {
      this[animationProp] = true;
      setTimeout(() => {
        this[animationProp] = false;
      }, 2000);
    }
  },
  created() {
    this.calendar = this.$calendar();
    if (this.isPast) {
      this.open = true;
    }
  }
};
</script>

<style scoped>
.door {
  background-color: var(--color8);
  border: 5px solid #fff;
  font-size: 70px;
  display: block;
  text-align: right;
  cursor: url("~static/images/christmas-star-filled.png"), auto;
}
.door:nth-child(2n) {
  border: 5px dotted black;
}
.door .door-number {
  font-size: 70px;
}
.door.open .door-number {
  display: none;
}
.door-1 {
  grid-column: 1;
  grid-row: 1;
}
.door-2 {
  grid-column: 6;
  grid-row: 2;
}
.door-3 {
  grid-column: 2;
  grid-row: 3;
  transform: rotate(-10deg);
}
.door-4 {
  grid-column: 1;
  grid-row: 3;
}
.door-5 {
  grid-column: 2;
  grid-row: 4;
  transform: rotate(10deg);
}
.door-6 {
  grid-column: 6;
  grid-row: 5;
}
.door-7 {
  grid-column: 4;
  grid-row: 3;
}
.door-8 {
  grid-column: 7;
  grid-row: 5;
}
.door-9 {
  grid-column: 4;
  grid-row: 5;
  transform: rotate(-5deg);
}
.door-10 {
  grid-column: 3;
  grid-row: 1;
  transform: skewX(20deg);
}
.door-11 {
  grid-column: 2;
  grid-row: 2;
}
.door-12 {
  grid-column: 5;
  grid-row: 4;
}
.door-11 {
  grid-column: 5;
  grid-row: 4;
}
.door-12 {
  grid-column: 2;
  grid-row: 2;
}
.door-13 {
  grid-column: 1;
  grid-row: 5;
}
.door-14 {
  grid-column: 5;
  grid-row: 1;
}
.door-15 {
  grid-column: 3;
  grid-row: 2;
}
.door-16 {
  grid-column: 5;
  grid-row: 3;
}
.door-17 {
  grid-column: 7;
  grid-row: 3;
}
.door-18 {
  grid-column: 7;
  grid-row: 1;
}
.door-19 {
  grid-column: 6;
  grid-row: 4;
}
.door-20 {
  grid-column: 3;
  grid-row: 4;
}
.door-21 {
  grid-column: 3;
  grid-row: 5;
  transform: skewY(20deg);
}
.door-22 {
  grid-column: 4;
  grid-row: 1;
}
.door-23 {
  grid-column: 2;
  grid-row: 5;
}
.door-24 {
  grid-column: 5;
  grid-row: 2;
  transform: skewX(20deg);
}
.door.open {
  cursor: default;
  background-color: var(--color3);
  font-size: 16px;
  transform: none;
}
</style>
