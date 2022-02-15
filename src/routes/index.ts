import { Component } from 'vue'
import { RouteMeta, createRouter, createWebHistory, Router } from 'vue-router'

interface IRoute {
  path: string
  component: Component
  name: string
  meta?: RouteMeta
}

export default class Routes {
  private Home: Component
  private Calculadora: Component
  private Info: Component

  constructor () {
    this.Home = () => import('../components/HelloWorld.vue')
    this.Calculadora = () => import('../components/Calculadora.vue')
    this.Info = () => import('../components/Info.vue')
  }

  private routes (): IRoute[] {
    return [
      {
        path: '/',
        component: this.Home,
        name: 'home',
        meta: { title: 'Home' }
      },
      {
        path: '/info',
        component: this.Info,
        name: 'info',
        meta: { title: 'Info' }
      },
      { path: '/calculadora', component: this.Calculadora, name: 'pepito' }
    ]
  }

  private router (): Router {
    return createRouter({
      history: createWebHistory(),
      routes: this.routes()
    })
  }

  private beforeEach (router: Router): void {
    router.beforeEach((to, _, next) => {
      if (to.meta && to.meta.title) {
        document.title = to.meta.title as string
      } else if (to.name != null) {
        document.title = to.name as string
      } else {
        document.title = 'mi aplicaición'
      }
      next()
    })
  }

  excute (): Router {
    const rutas = this.router()
    this.beforeEach(rutas)
    return rutas
  }
}
