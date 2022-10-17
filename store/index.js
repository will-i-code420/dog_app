import { Store } from 'vuex'
import dogsModule from './dogs/index'
import Cookie from 'js-cookie'

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
      },
      initAuth({ commit, dispatch }, req) {
        let token
        let tokenExpiration
        if (req) {
          if (!req.headers.cookie) return
          const tokenCookie = req.headers.cookie.split(';').find(cookie => {
            cookie.trim().startsWith('jwt=')
          })
          if (!tokenCookie) return
          token = tokenCookie.split('=')[1]
          tokenExpiration = req.headers.cookie.split(';').find(cookie => {
            cookie.trim().startsWith('jwtExpiration=')
          }).split('=')[1]
        } else {
          token = localStorage.getItem('token')
          tokenExpiration = localStorage.getItem('tokenExpiration')
        }
        if (new Date().getTime() > +tokenExpiration || !token) {
          dispatch('logout')
          return
        }
        commit('setToken', token)
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
