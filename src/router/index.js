import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'
import Movie from '@/pages/Movie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Main',
      name: 'Main',
      component: Main
    },
    {
      path: '/Movie',
      name: 'Movie',
      component: Movie
    }
  ]
})
