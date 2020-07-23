import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Mi from '../xiaomi/mi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mi',
      component: Mi
    }
  ]
})
