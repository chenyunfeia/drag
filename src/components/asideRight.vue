<template>
  <transition name="fadeR">
    <div id="asideRight" v-if="asideRight" class="fr"></div>
  </transition>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["asideRight"]),
};
</script>