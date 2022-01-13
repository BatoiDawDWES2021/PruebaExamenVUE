import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Empresas from '../views/Empresas.vue'
import NuevaOferta from '../views/NuevaOferta.vue'
import EmpresaView from '../views/EmpresaView.vue'
import OfertasTable from '../views/OfertasTable.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/empresa',
    name: 'Empresa',
    component: Empresas
  },
  {
    path: '/new',
    name: 'NuevaOferta',
    component: NuevaOferta,
  },
  {
    path: '/newEdit/:id',
    name: 'NuevaOfertaEdit',
    component: NuevaOferta,
    props:true
  },
  {
    path: '/empresa/:id',
    name: 'EmpresaView',
    component: EmpresaView,
    props: true 
  },
  {
    path: '/ofertas/:empresa',
    name: 'OfertaTable',
    component: OfertasTable,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
