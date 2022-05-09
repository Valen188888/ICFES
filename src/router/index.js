import Vue from 'vue'
import VueRouter from 'vue-router'
import ListQuestion from '../views/ListQuestions.vue'
import AddQuestion from '../views/AddQuestion.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ListQuestion
  },
  {
    path: '/agregar',
    name: 'add',
    component: AddQuestion
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
