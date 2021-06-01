import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'    //重定向
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/login.vue')
  },
  {
    path: '/home',
    name: 'home',
    redirect:'/index',    //重定向
    meta:{title:'首页'},
    component: () => import( '../views/home/index.vue'),
    children:[
      {
        path: '/index',  //首页
        name: 'index',
        meta:{title:'首页'},
        component: () => import( '../views/home/index/index.vue')
      },
      {
        path: '/stats',  //数据统计
        name: 'stats',
        meta:{title:'数据统计'},
        component: () => import( '../views/home/stats/index.vue')
      },
      {
        path: '/wms',  //信息管理
        name: 'wms',
        meta:{title:'信息管理'},
        component: () => import( '../views/home/wms/index.vue'),
        children:[
          {
            path: '/wms/list',  //列表展示
            name: 'wmsList',
            meta:{title:'列表展示'},
            component: () => import( '../views/home/wms/list.vue')
          },
        ]
      },
    ]
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach(function(to,from,next){
  if(!sessionStorage.getItem('username')){
    if(to.path !=='/login'){
      next('/login')
    }
  };
  next();
})

export default router
