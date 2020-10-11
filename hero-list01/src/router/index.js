import Vue from 'vue'
import VueRouter from 'vue-router'
import Hero from '../views/Hero.vue'
import Arm from '../views/Arm.vue'
import Skill from '../views/Skill.vue'
import HeroAdd from '../views/Hero-Add.vue'
import HeroEmit from '../views/Hero-Emit.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/hero' },
    { path: '/hero', component: Hero },
    { path: '/arm', component: Arm },
    { path: '/skill', component: Skill },
    { path: '/hero-add', component: HeroAdd },
    { path: '/hero-emit/:id', component: HeroEmit }

  ],
  linkActiveClass: 'active'
})
export default router
