<template>
  <div id="home">
    <div id="next">
      <!--<Banner></Banner>-->
      <Hot></Hot>
    </div>
  </div>
</template>
<script>
  import Banner from './banner.vue'
  import Nav from '../../common/Nav.vue'
  import Header from '../../common/header.vue'
  import Hot from './hot.vue'
  export default {
    data(){
      return{

      }
    },
    components:{
      Banner,Nav,Header,Hot
    }
  }
</script>
<style lang="less" scoped>
@import "../../../common/style/index.less";
  #home{
    background-color: @topBgColor;
  }
  #top{
    position: fixed;
    .w(375);
    z-index: 100;
  }
  #next{
    .pt(88)
  }
</style>
