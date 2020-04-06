import Vue from 'vue'
import router from 'vue-router'
Vue.use(router)
import a from './components/a.vue'
import b from './components/b.vue'

console.info(process.env, 'process.env.PUBLIC_PAYH,')
export default new router({
  mode: 'history',
  base: process.env.BASE_URL,
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