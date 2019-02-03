import Vue from 'vue'
import Router from 'vue-router'
import NewYear2019 from '@/components/NewYear2019'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NewYear2019',
      component: NewYear2019,
    },
  ],
})
