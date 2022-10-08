import { Store } from 'vuex'
import dogsModule from './dogs/index'

const createStore = () => {
  return new Store({
    namespaced: true,
    modules: {
      dogs: dogsModule
    },
    state: {
      user: {},
      isLoggedIn: false,
      isAdmin: false
    },
    mutations: {},
    actions: {
      async nuxtServerInit({ dispatch }) {
        await dispatch('dogs/getAllDogs')
      }
    },
    getters: {
      getIsLoggedIn(state) {
        return state.isLoggedIn
      }
    }
  })
}

export default createStore
