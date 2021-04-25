import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function lazyLoad(folder, view) {
  return () => import(`../views/pages/${folder}/${view}.vue`);
}

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: lazyLoad('login', 'Login')
  },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
