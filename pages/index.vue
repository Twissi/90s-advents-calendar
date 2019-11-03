<template>
  <div class="calendar">
    <p>{{poem}}</p>
    <div class="doors">
      <template v-for="door in doors">
        <door v-bind="door" :key="door.id" />
      </template>
    </div>
  </div>
</template>

<script>
import { poem, doors } from "~/content/content";
import doorComponent from "~/components/door";

export default {
  components: {
    door: doorComponent
  },
  name: "Calendar",
  data: () => {
    return { poem: poem, doors: doors };
  }
};
</script>

<style lang="postcss" scoped>
.doors {
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100vw - 50px);
  height: calc(100vh - 50px);
  padding: 25px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 30px;
  grid-template-rows: repeat(6, 1fr);
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
