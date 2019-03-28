<template>
    <div class="detail">
      <div class="top" :style="{backgroundImage: 'url(' + imgPath + ')'}">
        <div class="cover"></div>
        <div class="tit">
          <span @click="back" class="iconfont icon-zuo"></span>
          <span>{{singer}}</span>
        </div>
        <div class="random">
          随机播放全部
        </div>
      </div>
      <div class="bottom wrapper">
        <ul class="content">
          <li @click="goPlayer(index)" class="song" v-for="(item,index) in songList" :key="index">
            <p>{{item.musicData.songorig}}</p>
            <h2>{{item.musicData.singer[0].name}}-{{item.musicData.albumname}}</h2>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
  import BScroll from 'better-scroll';
  import jsonp from '../../common/util/util';
    export default {
      data(){
        return{
          singer:"",
          imgPath:"",
          Fsinger_mid:"",
          songList:[]
        }
      },
      created(){
        if(!this.$route.params.info){
          return this.$router.back()
        }
        this.singer=this.$route.params.info.name;
        this.imgPath=this.$route.params.info.avator;
        this.Fsinger_mid=this.$route.params.info.Fsinger_mid;
        this.initSongList(this.Fsinger_mid);
  },
      methods:{
        goPlayer(index){
          this.$store.commit('addPlayList',{list:this.songList,index:index})
        },
        back(){
          this.$router.back();
        },
        initSongList(mid){
          let url=`/getBanner/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&hostUin=0&needNewCode=0&platform=yqq&order=listen&begin=0&num=80&songstatus=1&singermid=${this.Fsinger_mid}`;
          jsonp(url,{param:'jsonpCallback'})
            .then((data)=>{
              this.songList=data.data.list;
              console.log(data)
            });
        },

      },
      mounted(){
        let wrapper = document.querySelector('.wrapper');
        let scroll = new BScroll(wrapper)
      }
    }
</script>
<style lang="less" scoped>
@import "~commonStyle/index.less";
  .detail{
    .icon-zuo{
      color: #ffcd32;
      font-size: 22px;
      position: absolute;
      left: -140px;
    }
    .w(375);
    position: fixed;
    top:0;
    bottom: 0;
    background-color: #222;
    z-index: 20;
    .tit{
      position: absolute;
      .h(40);
      .lh(40);
      font-size: 18px;
      color: white;
    }
    .top{
      .h(262.5);
      background-size: cover;
      display: flex;
      justify-content: center;
      .cover{
        position: absolute;
        .top(0);
        .h(262.5);
        .w(375);
        background: rgba(7,17,27,.4);
      }
    }
    .random{
      .w(135);
      .h(32);
      border: 1px solid #ffcd32;
      border-radius: unit(32/37.5,rem);
      .lh(32);
      text-align: center;
      color: #ffcd32;
      font-size: 14px;
      position: absolute;
      .top(210)
    }
    .bottom{
      position: absolute;
      overflow: scroll;
      .w(315);
      .h(358);
      .padding(20,30,20,30);
      background-color: #222;
      /*transition-property: transform;
      transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
      transition-duration: 0ms;
      transform: translate(0px, 0px) translateZ(0px);*/
    }
    .song{
      .w(315);
      .h(64);
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: center;
      p{
        color: white;
        .lh(20);
        font-size: 14px;
      }
      h2{
        color: hsla(0,0%,100%,.3);
        .lh(20);
        font-size: 14px;
        .mt(4);
      }
    }
  }
</style>


http://dl.stream.qqmusic.qq.com/http://dl.stream.qqmusic.qq.com/C400${songmid}.m4a?guid=7911080200&vkey=B7EC4E2D6FE35C995F54283152F9872F4261767851319B1836E6F3F7C92932AB3D0ECA8CB9CC446C8DE362359D228530C6AF6197D2FDF16C&uin=0&fromtag=38
http://dl.stream.qqmusic.qq.com/http://dl.stream.qqmusic.qq.com/C400001Qu4I30eVFYb.m4a?guid=7911080200&vkey=0C382E71A8DC5D12773AE20D61883AD8D222F443E9DE464F86256B2A950FD73EBBE1970805EEEF6760349C2FA8BDFF03578DDF3033B02781&uin=0&fromtag=38
