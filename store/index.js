import { Store } from 'vuex'
import dogsModule from './dogs/index'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '~/plugins/firebase.js'

const createStore = () => {
  return new Store({
    namespaced: true,
    modules: {
      dogs: dogsModule
    },
    state: {
      userToken: null
    },
    mutations: {},
    actions: {
      async nuxtServerInit({ dispatch }) {
        await dispatch('dogs/getAllDogs')
      },
      async login({ commit }, loginForm) {
        try {

        } catch (e) {
          console.log(e)
        }
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
