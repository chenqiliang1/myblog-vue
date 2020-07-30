import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Article = () => import('../views/article/Article')
const About = () => import('../views/about/About')
const Mine = () => import('../views/mine/Mine')
const Resources = () => import('../views/resources/Resources')
const TimeLine = () => import('../views/timeline/TimeLine')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/article',
    component: Article
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/resources',
    component: Resources
  },
  {
    path: '/timeline',
    component: TimeLine
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
