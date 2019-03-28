<template>
    <div class="search">
      <div class="searchTop">
        <div  class="scarchBord" >
          <input @input="change" v-model="searchData" type="text" class="searchInput" placeholder="搜索歌曲、歌手">
          <div class="wrapper" :class="searchData.length===0?'none':''">
            <ul class="content" id="searchData">
              <li class="dataList" v-for="(val,key,index) in searchMsg">{{key}}-{{val}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="next">
          <p class="tit">热门搜索</p>
          <ul class="hotList">
            <li class="hotMsg" v-for="(item,index) in hotSearchList" @click="change(item)">
              <span>{{item.k}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
  import hotSearch from '../../../common/api/apiconfig';
  import BScroll from 'better-scroll'
    export default {
      data(){
        return{
          hotSearchList:[],
          searchData:"",
          songList:[],
          singerName:"",
          searchMsg:'',
          searchOne:""
        }
      },
      watch:{
        searchData(oldVal,newVal){

        }
      },
      methods:{
        click(item){
          this.searchData=item.k.replace(/(^\s*)|(\s*$)/g,"");
        },
        change(item){
            this.searchData=item.k||""||this.searchData;
//            this.$nextTick(()=>{
          setTimeout(()=>{
            this.$axios.get(`/getSearchData/music/api/search?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&w=${encodeURI(this.searchData||"")}&p=1&perpage=20&n=20&catZhida=1&zhidaqu=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&remoteplace=txt.mqq.all&uin=0&needNewCode=1&platform=h5`)
              .then((data)=>{
                this.songList=data.data.data.song.list;
                this.$nextTick(()=>{
                  this.searchMsg={

                  };
                  var singerName=[];
                  for(var i=0;i<this.songList.length;i++){
                    for(var j=0;j<this.songList[i].singer.length;j++){
                      singerName.push(this.songList[i].singer[j].name);
                      this.searchMsg[this.songList[i].songname]=singerName.join("/");
                    }
                    singerName=[];
                  }
                })
              });
          },800)

//            })
        }
      },
      mounted(){
        this.$axios.get(hotSearch.hotSearch)
          .then((data)=>{
          var list=data.data.slice(4);
            list = list.substring(0,list.length-1);
            this.hotSearchList=JSON.parse(list).data.hotkey.splice(0,10);
          });
        this.scroll=new BScroll('.wrapper');
      }
    }
</script>
<style lang="less" scoped>
  @import '~commonStyle/index.less';
  .search{
    .pt(88);
    background-color: #222;
    display: flex;
    flex-direction: column;
  }
  .searchTop{
    position: relative;
    .h(80);
    display: flex;;
    justify-content: center;
    align-items: center;
    .scarchBord{
      .w(323);
      .h(40);
      background-color: #333;
      border-radius: unit(6/@remSize,rem);
      display: flex;
      justify-content: center;
      align-items:center;
      .searchInput{
        color: white;
        .w(289);
        .h(18);
        .ml(5);
        .mr(5);
        border: none;
        outline: none;
        background-color: transparent;
        font-size: @fontSize-m;
      }
    }
  }
  .next{
    .w(375);
    display: flex;
    flex-direction: column;
    align-items: center;
    .tit{
      display: block;
      text-align: left;
      .h(14);
      .mb(20);
      color: hsla(0,0%,100%,.5);
      font-size: @fontSize-m;
      .w(335);
      .lh(14)
    }
    .hotMsg{
      .padding(5,10,5,10);
      .margin(0,20,10,0);
      background-color: #333;
      color: hsla(0,0%,100%,.3);
      border-radius: unit(6/@remSize,rem);
      display: inline-block;
      float: left;
    }
  }
.hotList{
  .w(335)
}
  .bottom{
    position: fixed;
    .top(167);
    .bottom(0);
    background-color: #222;
    overflow: scroll;
  }
  .wrapper{
    position: absolute;
    z-index: 200;
    background-color: #222;
    .w(315);
    .h(489);
    .padding(0,30,0,30);
    .top(79);
    overflow: scroll;
    .dataList{
      .w(315);
      .h(16);
      .pb(20);
      .lh(16);
      color: hsla(0,0%,100%,.3);
      /*display: flex;*/
      /*justify-content: flex-start;*/
      text-align: left;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .none{
    display: none;
  }
</style>
