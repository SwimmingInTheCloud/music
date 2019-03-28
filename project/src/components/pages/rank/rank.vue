<template>
    <div id="rank" class="wrapper">
      <div class="content">
        <div class="bord" v-for="(item,index) in list">
          <div class="imgCorn">
            <img v-lazy="item.picUrl" alt="">
          </div>
          <ul class="msgCorn">
            <li class="songList" v-for="(e,i) in item.songList">{{e.songname}}-{{e.singername}}</li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
  import aipConfig from '../../../common/api/apiconfig';
  import BScroll from 'better-scroll'
    export default {
      data(){
        return{
          list:[]
        }
      },
      methods:{
        initList(data){
          this.list=data;
        }
      },
      created(){/*this.scroll.toElement()*/

        this.$axios.get('/getRank'+aipConfig.rankApi)
          .then((data)=>{
           let str = data.data.slice(4);
           str = str.substring(0,str.length-1);
           this.initList(JSON.parse(str).data.topList);
        })
      },
      mounted(){
        let wrapper = document.querySelector('.wrapper');
        let scroll = new BScroll(wrapper)
      }
    }
</script>
<style lang="less" scoped>
@import "~commonStyle/index.less";
  #rank{
    background-color: @topBgColor;
    .pt(88);
    .bord{
      .pt(20);
      .ml(20);
      .mr(20);
      .w(335);
      .h(100)
    }
    .imgCorn{
      .w(100);
      .h(100);
      background-color: white;
      float: left;
    }
    .msgCorn{
        .w(195);
      .h(100);
      .pl(20);
      .pr(20);
      background-color: @borderBgColor;
      float: right;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .songList{
        .w(195);
        .h(26);
        color: hsla(0,0%,100%,.3);
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: @fontSize-s;
      }
    }
  }
  img{
    width: 100%;
  }
  .wrapper{
    position: fixed;
    .top(88);
    .bottom(0)
  }
</style>
