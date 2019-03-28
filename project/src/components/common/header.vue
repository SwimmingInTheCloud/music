<template>
    <div>
      <span>Chicken Music</span>
    </div>
</template>
<script>
    export default {
      data(){
        return{

        }
      }
    }
</script>
<style lang="less" scoped>
@import "../../common/style/index.less";
div{
  .h(44);
  background-color: @topBgColor;
  text-align: center;
  color: @headerFontColor;
  font-size: @fontSize-xl;
  .lh(44);
  position: fixed;
  .w(375);
  .top(0);
  z-index: 10;
}
</style>
