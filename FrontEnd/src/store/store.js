import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store= new Vuex.Store({
  state: {
    cours:[],
    message:"",
  },
  mutations: {
    valider (state, val) {
      state.cours.push(val)
    },
    logmess (state, val) {
      state.message =val
    },
    suprimer (state) {
      state.cours.pop()
    },
  },
  actions: {
  },
  modules: {
  }
})