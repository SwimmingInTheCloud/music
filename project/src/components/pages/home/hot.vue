<template>
    <div id="hot" class="wrapper">
      <div class="content">
        <Banner></Banner>
        <div id="tit">热门歌单推荐</div>
        <ul>
          <li v-for="(item,index) in list" :key="index">
            <div id="imgCon">
              <img v-lazy="item.imgurl" alt="">
            </div>
            <h2>{{item.creator.name}}</h2>
            <p>{{item.dissname}}</p>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
  import BScroll from 'better-scroll';
  import Banner from '../home/banner.vue'
    export default {
      data(){
        return{
          list:[]
        }
      },
      components:{
        Banner
      },
      created(){
        this.$axios.get("/getData/music/api/getDiscList?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&platform=yqq&hostUin=0&sin=0&ein=29&sortId=5&needNewCode=0&categoryId=10000000&rnd=0.3599647701062456")
          .then((data)=>{
          this.list=data.data.data.list;
          });
      },
      mounted(){
        let wrapper = document.querySelector('.wrapper');
        let scroll = new BScroll(wrapper)
      }
    }
</script>
<style lang="less" scoped>
@import "../../../common/style/index.less";
#tit{
  .h(65);
  font-size: @fontSize-m;
  color: @headerFontColor;
  text-align: center;
  .lh(65);
  background-color: @topBgColor;
}
  li{
    .pb(20);
    .pl(20);
    .pr(20);
    .h(63);
    text-align: left;
  }
  #imgCon{
    .w(60);
    .h(60);
    .mr(20);
    float: left;
  }
  h2{
    .h(20);
    .mb(10);
    .w(255);
    float: right;
    font-size: @fontSize-m;
    color: white;
    .lh(20)
  }
  p{
    .h(20);
    .w(255);
    float: right;
    color: hsla(0,0%,100%,.3);
    .lh(20)
  }
  img{
    width: 100%;
  }
  .wrapper{
    position: fixed;
    .top(88);
    .bottom(0);
    background-color: @topBgColor;
  }
</style>
