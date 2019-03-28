<template>
    <div>
      <router-link tag="li" to="/recommend" active-class="hoverChange">推荐</router-link>
      <router-link tag="li" to="/singer" active-class="hoverChange">歌手</router-link>
      <router-link tag="li" to="/rank" active-class="hoverChange">排行</router-link>
      <router-link tag="li" to="/search" active-class="hoverChange">搜索</router-link>
    </div>
</template>
<script>
    export default {
      data(){
        return{
          sel:0,
        }
      },
      methods:{
        click(i){
          this.sel=i;
        }
      }
    }
</script>
<style scoped lang="less">
@import "../../common/style/index.less";
  div{
    background-color: @topBgColor;
    position: fixed;
    .top(44);
    .w(375);
    z-index: 10;
    .h(44);
      .h(44);
      display: flex;
    justify-content: space-around;
    align-items: center;
      li{
        float: left;
        .h(21);
        .w(30);
        .lh(44);
        display: flex;
        justify-content: center;
        align-items: center;
        color: @navColor;
        .bb(2);
        border-bottom-style: solid;
        border-bottom-color: @topBgColor;
      }
    }
  .hoverChange{
    color: @navHoverColor;
    border-bottom-color: @navHoverColor;
  }
</style>
