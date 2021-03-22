import { createLocalVue } from '@vue/test-utils'
import vuex from 'vuex'
import gifsStore from '@/store/modules/gifs'

describe('Gifs Store', () => {
  it('should save gifs', () => {
    const localVue = createLocalVue()
    localVue.use(vuex)

    const store = new vuex.Store({ ...gifsStore })
    expect(store.state.allGifs.length).toBe(0)

    store.commit('setGifs', [{}])
    expect(store.state.allGifs.length).toBe(1)
  })
})
