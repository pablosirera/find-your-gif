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
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.VUE_APP_API_KEY_GIPHY}${params}`
      )
      const { data } = await response.json()
      commit('setGifs', data)
    },
  },
}
