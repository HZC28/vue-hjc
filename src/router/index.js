import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/view/index.vue'
import transform from '@/view/transform'

Vue.use(Router)
const router=new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect:'/echar'
    },
    
    {
      path: '/index',
      name: 'index',
      component:index ,
      meta: {
        title: '首页',
        keepAlive: true, // 需要被缓存
      }
    },
    {
      path: '/conponentEs6',
      name: 'conponentEs6',
      component:()=>{return import('@/view/conponentEs6.vue')},
      meta: {
        title: 'es6类',
        keepAlive: true, // 需要被缓存
      }
    },
    {
      path: '/transform',
      name: 'transform',
      component: transform
    },
    {
      path: '/slot',
      name: 'slot',
      component: ()=>{return import('@/view/myslot.vue')},
      meta: {
        title: '插槽',
        keepAlive: false, // 需要被缓存
      }
    },
    {
      path: '/mycsdn',
      name: 'slot',
      component: ()=>{return import('@/view/csdn.vue')},
      meta: {
        title: '爬取博客',
        keepAlive: false, // 需要被缓存
      }
    },
    {
      path: '/echar',
      name: 'slot',
      component: ()=>{return import('@/view/echar.vue')},
      meta: {
        title: 'echarts图表',
        keepAlive: false, // 需要被缓存
      }
    }
  ]
})
export default router
router.beforeEach((to, from, next) => {
  //路由发生改变时,触发
  // console.log(to,123)
  window.document.title = to.meta.title == undefined ? '默认标题' : to.meta.title 
  next()
})
