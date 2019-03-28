// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './common/style/reset.css'
import Axios from 'axios'
import router from './router/index';
import MintUI from 'mint-ui'
import LazyLoad from 'vue-lazyload';
import store from './store';
import "./components/icon/iconfont.css"
// import 'mint-ui/lib/style.css'

// Vue.use(MintUI);
Vue.config.productionTip = false;
Vue.prototype.$axios=Axios;
Vue.use(LazyLoad, {
  preLoad: 5,
  error: require('@/assets/reload.png'),
  loading: require('@/assets/reload.png'),
  attempt: 5
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  store,
  template: '<App/>'
})
