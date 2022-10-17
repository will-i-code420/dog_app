import { Store } from 'vuex'
import dogsModule from './dogs/index'

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
          const { email, password } = loginForm
          const user = await this.$fire.signInWithEmailAndPassword(this.$fire.auth, email, password)
          console.log(user)
        } catch (e) {
          console.log(e)
        }
      }
    },
    getters: {
      isAuth(state) {
        return state.userToken != null
      }
    }
  })
}

export default createStore
