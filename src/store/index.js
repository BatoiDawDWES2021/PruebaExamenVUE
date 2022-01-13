import Vue from 'vue'
import Vuex from 'vuex'
import api from '../../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    empresas: [],
    ofertas:[]
  },
  mutations: {
    loadEmpresas(state, payload){
      state.empresas = payload
    },
    loadOfertas(state, payload){
      state.ofertas = payload
    },
    
  },
  actions: {
    loadEmpresas(context){
      api.empresas.getAll()
      .then((response) => context.commit('loadEmpresas',response.data))
      .catch((error) => alert(error))
    },
    loadOfertas(context){
      api.ofertas.getAll()
      .then((response) => context.commit('loadOfertas',response.data))
      .catch((error) => alert(error))
    }
  },
  modules: {
  }
})
