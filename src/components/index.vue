<template>
  <div class="box">
    <AsideLeft></AsideLeft>
    <div id="main"></div>
    <AsideRight></AsideRight>
  </div>
</template>

<script>
import AsideLeft from "./asideLeft"
import AsideRight from "./asideRight"
export default {
 components:{
   AsideLeft,
   AsideRight
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>
.box{
  width: 100%;
  height: 100%;
}

</style>
