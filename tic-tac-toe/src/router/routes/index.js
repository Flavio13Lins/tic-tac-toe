const FallBack = () => import('@/views/Error/FallBackError.vue')
const Home = () => import('@/views/Home/HomeView.vue')

const routes = [
  {
    alias: ['/'],
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/error',
    name: 'error',
    component: FallBack
  },
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: FallBack
  }
]

export default routes
