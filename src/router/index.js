import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      requiresAuth: true,
      admin: true,
    },
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('@/views/Auth.vue'),
    redirect: '/auth/login',
    children: [
      {
        path: 'login',
        component: () => import('@/views/Login.vue'),
      },
      {
        path: 'register',
        component: () => import('@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'AuthLogin',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('@/views/Detail.vue'),
    props: true,
    meta: {
      requiresAuth: true,
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

const isLogged = true

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (isLogged) {
      next()
    } else {
      next('/login')
    }
  }
  next()
})

export default router
