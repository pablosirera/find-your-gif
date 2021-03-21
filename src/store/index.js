import Vue from 'vue'
import Vuex from 'vuex'
import gifs from './modules/gifs'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    gifs,
    auth,
  },
})
