import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Recommend from 'components/pages/recommend/recommend.vue'
import Search from 'components/pages/search/search.vue'
import Rank from 'components/pages/rank/rank.vue'
import Singer from 'components/pages/singer/singer.vue'
import Detail from '../components/common/detail.vue'
const router=new VueRouter({
  routes:[
    {
      path:"/recommend",
      name:"recommend",
      component:Recommend,
    },
  {
    path:"/rank",
      name:"rank",
    component:Rank,
  },
  {
    path:"/search",
      name:"search",
    component:Search,
  },
  {
    path:"/singer",
      name:"singer",
    component:Singer,
    children:[
      {
      path:"detail",
      name:"detail",
      component:Detail
    }
    ]
  },
    {
      path:"/",
      redirect:"/recommend"
    }
]
});
export default router
