// 导入
import Vue from 'vue'
import VueRouter from 'vue-router'
import Hero from '../views/Hero.vue'
import Arm from '../views/Arms.vue'
import Skill from '../views/Skill.vue'
import HeroAdd from '../views/HeroAdd.vue'
import HeroEmit from '../views/HeroEmit.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/heros' },
    { path: '/heros', component: Hero },
    { path: '/arms', component: Arm },
    { path: '/skill', component: Skill },
    { path: '/hero-add', component: HeroAdd },
    { path: '/hero-emit/:id', component: HeroEmit }
  ],
  linkActiveClass: 'active'
})
export default router
