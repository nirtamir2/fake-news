import Vue from 'vue'
import Router from 'vue-router'
import TitleSearch from '@/components/TitleSearch'
import DomainSearch from '@/components/DomainSearch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TitleSearch',
      component: TitleSearch
    },
    {
      path: '/domain',
      name: 'DomainSearch',
      component: DomainSearch
    }
  ]
})
