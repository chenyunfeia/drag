<template>
  <transition name="fade">
    <div id="asideLeft" v-if="asideLeft" class="fl"></div>
  </transition>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["asideLeft"]),
};
</script>
<style lang="scss" scoped>
</style>