<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in imgList" :key="index"><img :src="item.picUrl" alt=""></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
  import Api from '../../../common/api/apiconfig'
    export default {
      data(){
        return{
          imgList:[]
        }
      },
      mounted(){
          this.$axios.get(Api.bannerApi)
            .then((data)=>{
            this.imgList=data.data.data.slider;
              this.$nextTick(()=>{
                var mySwiper = new Swiper ('.swiper-container', {
                  loop: true, // 循环模式选项
                  autoplay:true,
                  // 如果需要分页器
                  pagination: {
                    el: '.swiper-pagination',
                  },

                  // 如果需要前进后退按钮
                  navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  },

                  // 如果需要滚动条
                  scrollbar: {
                    el: '.swiper-scrollbar',
                  },
                })
              })
            });

      }
    }
</script>
<style scoped lang="less">
@import "../../../common/style/index.less";
.swiper-container {
  .w(375);
  .h(150)
}
  img{
    width: 100%;
  }
</style>
