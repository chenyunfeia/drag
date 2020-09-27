<template>
  <div class="box clearfix">
    <AsideLeft></AsideLeft>
    <div id="main">
      <button @click="asideLeftIF(true)">出</button>
      <button @click="asideLeftIF(false)">进</button>
    </div>
    <AsideRight></AsideRight>
  </div>
</template>

<script>
import AsideLeft from "./asideLeft";
import AsideRight from "./asideRight";
import { mapMutations } from "vuex";
export default {
  components: {
    AsideLeft,
    AsideRight,
  },

  methods: {
    ...mapMutations(["asideLeftIF", "asideRightIF"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>
.box {
  width: 100%;
  height: 100%;
}
</style>
