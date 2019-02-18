import Vue from 'vue'
import Router from 'vue-router'
import defaultpage from '@/layout/default.vue'
import blankPage from '@/layout/blank.vue'
import Index from '@/components/page/index'
import changeCity from '@/components/page/changeCity.vue'
import goodsList from '@/components/page/goodsList.vue'
import Login from '@/components/page/login'
import Register from '@/components/page/register'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'defaultpage',
      component: defaultpage,
      redirect:'/index',
      children:[{
        path:'/index',
        name:'index',
        component: Index
      },
    {
      path:'/changeCity',
      name:'changeCity',
      component: changeCity
    },    {
      path:'s/:name',
      name:'goods',
      component: goodsList
    }]
    },
    {
      path:'/blank',
      name: 'blankPage',
      component: blankPage,
      children: [{
        path: '/login',
        name: 'login',
        component: Login
      },{
        path: '/register',
        name: 'register',
        component: Register

      }]

    }
  ]
})
