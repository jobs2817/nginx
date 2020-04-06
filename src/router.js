import Vue from 'vue'
import router from 'vue-router'
Vue.use(router)
import a from './components/a.vue'
import b from './components/b.vue'


export default new router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/a'
    },
    {
    path: '/a',
    component: a
  }, {
    path: '/b',
    component: b
  }]
})