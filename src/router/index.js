import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ShowList from '@/components/ShowList/index'
// import Manager from '@/components/ShowList/manager' //file manager.vue can not use
import Manager from '@/components/ShowList/manager1'
// import datalist from '@/components/data/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/showlist',
      name: 'ShowList',
      component: ShowList
    },
    // {
    //   path: '/data/list',
    //   name: 'datalist',
    //   component: datalist
    // },
    {
      path: '/manager',
      name: 'manager',
      component: Manager
    }
  ]
})
