import Vue from 'vue'
import router from 'vue-router'
Vue.use(router)
import a from './components/a.vue'
import b from './components/b.vue'
console.log(process.env.BASE_URL, 'process.env.BASE_URL')
export default new router({
  // mode: 'history',
  // base: process.env.BASE_URL,
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