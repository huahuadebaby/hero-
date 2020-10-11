import Vue from 'vue'
import VueRouter from 'vue-router'
import Hero from '../views/Hero.vue'
import Arm from '../views/Arm.vue'
import Skill from '../views/Skill.vue'
import HeroAdd from '../views/HeroAdd.vue'
import HeroEmit from '../views/HeroEmit.vue'

// 想用的vue插件还得引入
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/', redirect: '/hero'
    },
    {
      path: '/hero', component: Hero
    },
    {
      path: '/arm', component: Arm
    },
    {
      path: '/skill', component: Skill
    },
    {
      path: '/hero-add', component: HeroAdd
    },
    {
      path: '/hero-emit/:id', component: HeroEmit
    }
  ]

})
export default router
