import axios from '@/axios'

export default {
  namespaced: true,
  state: {
    allGifs: [],
  },
  mutations: {
    setGifs(state, gifs) {
      state.allGifs = gifs
    },
  },
  actions: {
    async listGifs({ commit }, params) {
      try {
        const { data } = await axios.get(`gifs/trending`, {
          params: { api_key: process.env.VUE_APP_API_KEY_GIPHY, ...params },
        })
        commit('setGifs', data.data)
      } catch (error) {
        console.error(error)
      }
    },
  },
}
