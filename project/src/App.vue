<template>
  <div id="app">
      <Header></Header>
      <Nav></Nav>
    <keep-alive><router-view></router-view></keep-alive>
    <Player class="player"></Player>
  </div>
</template>

<script>
import Home from './components/pages/home/home.vue';
import Header from './components/common/header.vue';
import Nav from './components/common/Nav.vue';
import Player from './components/common/play.vue'
export default {
  name: 'App',
  components: {
    Home,Header,Nav,Player
  }
}
</script>

<style lang="less">
  @import "~commonStyle/index.less";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .player{
    position: fixed;
    z-index: 300;
    top:0;
  }
}
</style>
