import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import CadastrarView from '@/views/CadastrarView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/loginacompanhante',
      name: 'loginacompanhante',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginAcompanhanteView.vue')
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: CadastrarView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/dashboard-acompanhante',
      name: 'dashboard-acompanhante',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardAcompanhante.vue')
    },
    {
      path: '/progresso',
      name: 'progresso',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RegistrarProgressoView.vue')
    },
    {
      path: '/cadAcompanhante',
      name: 'cadAcompanhante',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CadastrarAcompanhanteView.vue')
    },
    {
      path: '/podcasts',
      name: 'podcasts',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PodcastsView.vue')
    },
    {
      path: '/alterardados',
      name: 'alterardados',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AlterarDadosView.vue')
    },
  ]
})

export default router
