export default [
    {
        path: '/user/index',
        name: 'user_index',
        component: ()=>{return import('@/view/user/index.vue')},
        meta: {
          title: '连接本地数据库',
          keepAlive: false, // 需要被缓存
        }
      }
]