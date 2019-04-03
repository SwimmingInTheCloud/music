<template>
    <div class="play" v-if="songList.length">
      <div class="top" v-show="state">
        <div class="bg">
          <img :src='"https://y.gtimg.cn/music/photo_new/T002R300x300M000"+currentSong.musicData.albummid+".jpg?max_age=2592000"' alt="">
        </div>
        <div class="up">
          <div class="nav">
            <span @click="change" class="iconfont icon-chevron-down"></span>
            <span class="tit">{{currentSong.musicData.songname}}</span>
          </div>
          <h2 class="name">{{currentSong.musicData.singer[0].name}}</h2>
          <div  :class="this.rotate?'imgCon bigRotate':'imgCon'" ref="bigRotate">
            <img :src='"https://y.gtimg.cn/music/photo_new/T002R300x300M000"+currentSong.musicData.albummid+".jpg?max_age=2592000"' alt="">
          </div>
          <div class="control">
            <audio :src="music" ref="audio"></audio>
            <div class="loop">
              <span class="iconfont icon-liebiaoxunhuan"></span>
            </div>
            <div class="prev">
              <span @click="prev" class="iconfont icon-A_-shangyishou"></span>
            </div>
            <div class="stop">
              <span @click="play"  :class="this.rotate?'iconfont icon-zanting':'iconfont icon-bofang'"></span>
            </div>
            <div class="next">
              <span @click="next" class="iconfont icon-A_-xiayishou"></span>
            </div>
            <div class="like">
              <span class="iconfont icon-weishoucangpx"></span>
            </div>
          </div>
        </div>
      </div>
      <div @click="change" class="bottom" v-show="!state">
        <div :class="this.rotate?'lImgCorn littleRotate':'lImgCorn'">
          <img :src='"https://y.gtimg.cn/music/photo_new/T002R300x300M000"+currentSong.musicData.albummid+".jpg?max_age=2592000"' alt="">
        </div>
        <div class="info">
          <p class="songName">{{currentSong.musicData.songname}}</p>
          <p class="singerName">{{currentSong.musicData.singer[0].name}}</p>
        </div>
        <div class="lControl">
          <span @click.stop="play" :class="this.rotate?'iconfont icon-zanting':'iconfont icon-bofang'"></span>
        </div>
        <div class="sList">
          <span class="iconfont icon-yinleliebiao-copy"></span>
        </div>
      </div>
    </div>
</template>
<script>
  import {mapState,mapGetters} from 'vuex'
    export default {
    data(){
      return{
        state:true,
        rotate:true
      }
    },
    methods:{
      change(){
        this.state=!this.state;
      },
      prev(){
        let audio=this.$refs.audio;
        this.$store.commit('prevSong')
      },
      next(){
        this.$store.commit('nextSong')
      },
      play(){
        console.log(this.$refs.bigRotate.className);
        if(this.$refs.audio.paused){
          this.rotate=true;
          this.$refs.audio.play()
        }else{
          this.rotate=false;
          this.$refs.audio.pause()
        }
      }
    },
      computed:{
        music(){
          if(this.currentSong){
            return `http://dl.stream.qqmusic.qq.com/C400${this.currentSong.musicData.songmid}.m4a?guid=1833256900&vkey=A2898B766529031EB8B03A23638A04E6741983C164B0FA5AEAB4435693206D7F635F4F4DB5AB21FD22BB5BC4B1EB960ABC8218FDA69AF32C&uin=0&fromtag=38`
          }
        },
        ...mapState({songList:state=>state.singer.playList}),
        ...mapGetters(['currentSong'])
      },
      watch:{
        currentSong:function () {
          this.$nextTick(()=>{
            this.$refs.audio.play()
          })
        }
      },
      created(){

      }
    }
</script>
<style lang="less" scoped>
@import "~commonStyle/index.less";
.top{
  .w(375);
  .h(667);
}
  .play{
    /*.w(375);
    height: 100%;*/
    z-index: 30;
    position: fixed;
    background-color: #222;
  }
  .imgCon{
    .w(280);
    .h(280);
    border: 10px solid hsla(0,0%,100%,.1);
    overflow: hidden;
    border-radius: 50%;
    .mt(20);
  }

  .bigRotate{
    transition: 0.5s;
    transform-origin: 150px 150px;
    animation: imgCon 20s linear infinite;
  }

  .littleRotate{
    transition: 0.5s;
    transform-origin: 20px 20px;
    animation: limgCon 20s linear infinite;
  }

@keyframes limgCon {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


@keyframes imgCon {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}



  .nav{
    .h(40);
    font-size: 18px;
    color: white;
    .lh(40)
  }
  .name{
    .h(20);
    .lh(20);
    color: white;
    font-size: 14px;
  }
  .bg{
    position: absolute;
    .w(375);
    height: 100%;
    opacity: .6;filter: blur(20px);
    img{
      width: 100%;
      height: 100%;
    }
  }
  .up{
    display: flex;
    flex-direction: column;
    align-items: center;
    .w(375);
    height: 100%;
    position: absolute;
    z-index: 100;
  }
  .control{
    font-size: 30px;
    color: #ffcd32;
    .w(375);
    .h(40);
    .lh(40);
    position: fixed;
    .bottom(50);
    display: flex;
    .loop{
      .w(67);
      .h(31);
    }
    .prev{
      .w(67);
      .h(31);
    }
    .stop{
      .w(107);
      .h(40);
      font-size: 40px;
    }
    .next{
      .w(67);
      .h(31);
    }
    .like{
      .w(67);
      .h(31);
    }
  }
  .icon-liebiaoxunhuan,.icon-A_-shangyishou,.icon-A_-xiayishou,.icon-weishoucangpx{
    font-size: 30px;
  }
  .icon-bofang{
    font-size: 40px;
  }
.icon-zanting{
  font-size: 35px;
}
  .bottom{
    background: #333;
    display: flex;
    align-items: center;
    .w(375);
    .h(60);
    position: fixed;
    bottom: 0;
    z-index: 300;
    .lImgCorn{
      .w(40);
      .h(40);
      border-radius: 50%;
      overflow: hidden;
      .margin(0,10,0,20);
      img{
        width: 100%;
      }
    }
    .info{
      display: flex;
      flex-direction: column;
      text-align: left;
      .songName{
        .w(205);
        .h(20);
        .mb(2);
        font-size: 14px;
        color: white;
      }
      .singerName{
        .w(205);
        .h(20);
        font-size: 12px;
        color: hsla(0,0%,100%,.3);
      }
    }
    .lControl{
      .w(50);
      .h(35);
      .lh(35);
      color: rgba(255,205,49,.5);
      .icon-bofang{
        font-size: 41px;
      }
    }
    .sList{
      .w(50);
      .h(31);
      .lh(31);
      color: rgba(255,205,49,.5);
      .icon-yinleliebiao-copy{
        font-size: 41px;
      }
    }
  }
  .icon-chevron-down{
    color: #ffcd32;
    font-size: 22px;
    position: fixed;
    left: 20px;
  }
</style>
