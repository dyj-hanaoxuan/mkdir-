import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _49f9ef66 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _612feec2 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _75f39c34 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _756820e6 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _6e47e6f4 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _6197a2e0 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _5c326433 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _49f9ef66,
    children: [{
      path: "",
      component: _612feec2,
      name: "home"
    }, {
      path: "/login",
      component: _75f39c34,
      name: "login"
    }, {
      path: "/reg",
      component: _75f39c34,
      name: "reg"
    }, {
      path: "/profile/:username",
      component: _756820e6,
      name: "profile"
    }, {
      path: "/settings",
      component: _6e47e6f4,
      name: "settings"
    }, {
      path: "/editor",
      component: _6197a2e0,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _5c326433,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
