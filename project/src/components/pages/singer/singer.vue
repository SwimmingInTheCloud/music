<template>
  <div class="singer">
    <div class="wrapper">
      <ul class="content">
        <li v-for="(item,index) in singerList" :key="index">
          <div class="tit" :ref="item.title">{{item.title}}</div>
          <ul>
            <li v-for="(e,i) in item.items" :key="i" class="msg" @click="details(e)">
              <div class="imgCorn">
                <img v-lazy="e.avator" alt="">
              </div>
              <span class="name">{{e.name}}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!--侧边栏-->
    <ul class="aside"
        @touchstart="start"
        @touchmove="move"
        @touchend="end">
      <li
        v-for="(item,index) in asideList"
        @click="go(item,index)"
        :key="index"
        :class="sel==index?'sel':''">{{item}}</li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
  import SingerData from '../../../common/data/singerData';
  import BScroll from 'better-scroll';
    export default {
      data(){
        return{
          singerList:[],
          sel:0,
        }
      },
      methods:{
        details(i){
          this.$router.push({name:"detail",params:{info:i}})
        },
        go(item,index){
          this.sel=index;
          this.scroll.scrollToElement(this.$refs[item][0])
        },
        start(e){
          this.startY=e.touches[0].clientY;
          this.startIndex=this.asideList.indexOf(e.touches[0].target.innerText)
        },
        move(e){
          let moveY=e.touches[0].clientY-this.startY;
          let index=Math.ceil(moveY/18);
          this.sel=index+this.startIndex;
          if(this.sel<0){
            this.sel=0
          }else if(this.sel>this.asideList.length-1){
            this.sel=this.asideList.length-1
          }
          this.scroll.scrollToElement(this.$refs[this.asideList[this.sel]][0])
        },
        end(e){

        }
      },
      created(){
        setTimeout(()=>{
          var obj={
            "热":{
              title:"热",
              items:[]
            }
          };
          var index=0;
          let list=SingerData.data.list;
          list.forEach((item)=>{
            index++;
            if(index<=20){
              obj["热"].items.push({
                name:item.Fsinger_name,
                avator:`https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg?max_age=2592000`,
                Findex:item.Findex,
                Fsinger_mid:item.Fsinger_mid
              })
            }

            if(obj[item.Findex]){
              obj[item.Findex].items.push({
                name:item.Fsinger_name,
                avator:`https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg?max_age=2592000`,
                Findex:item.Findex,
                Fsinger_mid:item.Fsinger_mid
              })
            }else {
              obj[item.Findex]={
                  title:item.Findex,
                  items:[]
              };
              obj[item.Findex].items.push({
                name:item.Fsinger_name,
                avator:`https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg?max_age=2592000`,
                Findex:item.Findex,
                Fsinger_mid:item.Fsinger_mid
              })
            }
          });
          var arr=[];
          var hot=[];
          for(var str in obj){
            if(str!=9){
              if(str==="热"){
                hot.push(obj[str])
              }else {
                arr.push(obj[str])
              }
            }
          }
          arr.sort((a,b)=>{
            return a.title.charCodeAt()-b.title.charCodeAt()
          })
          this.singerList=hot.concat(arr);
          this.$nextTick(()=>{
            this.scroll=new BScroll('.wrapper',{probeType:3,click:true});
            this.scroll.on('scroll',(obj)=>{
              for(var i=0;i<this.scrollHeight.length;i++){
                if(this.scrollHeight[i]<Math.abs(obj.y)){
                  this.sel=i+1;
                }else if(this.scrollHeight[0]>Math.abs(obj.y)){
                  this.sel=0;
                }
              }
            })
          })
        },500)
      },
      computed:{
        scrollHeight(){
          var arr=this.singerList.map((elem)=>{
            return 30+elem.items.length*70
          })
          var heights=[];
          var index=0;
          for(var i=0;i<arr.length;i++){
            index+=arr[i];
            heights.push(index)
          }
          return heights;
        },
        asideList(){
          var arr=this.singerList.map((elem)=>{
            return elem.title
          });
          return arr;
        }
      }
    }
</script>
<style lang="less" scoped>
@import "~commonStyle/index.less";
  .wrapper{
    background-color: #222;
    position: fixed;
    .top(88);
    .bottom(0);
    .w(375);
    .tit{
      .w(355);
      .h(30);
      .pl(20);
      background-color: #333;
      color: hsla(0,0%,100%,.5);
      font-size: 12px;
      text-align: left;
      .lh(30)
    }
  }
  .imgCorn{
    .w(50);
    .h(50);
    border-radius: 50%;
    overflow: hidden;
  }
  img{
    width: 100%;
  }
  .msg{
    .w(345);
    .h(50);
    .padding(20,0,0,30);
    display: flex;
    align-items: center;
  }
  .name{
    .ml(20);
    font-size: 14px;
    color: hsla(0,0%,100%,.5);
  }
  .aside{
    background-color: white;
    .w(20);
    .h(414);
    .padding(20,0,20,0);
    position: fixed;
    z-index: 10;
    background: rgba(0,0,0,.3);
    color: hsla(0,0%,100%,.5);
    border-radius: 10px;
    top: 50%;
    transform: translate3d(0,-40%,0);
    .right(10);
    font-weight: 400;
    font-size: 12px;
    li{
      .w(20);
      .h(18);
    }
  }
  .sel{
    color: @headerFontColor;
}
</style>
