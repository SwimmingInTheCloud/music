import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import singer from './singer'
const store=new Vuex.Store({
  modules:{
    singer,
  }
});
export default store;
