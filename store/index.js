import { Store } from 'vuex'
import Cookie from 'js-cookie'
import JWTDecode from 'jwt-decode'
import cookieparser from 'cookieparser'
import dogsModule from './dogs/index'

const createStore = () => {
  return new Store({
    namespaced: true,
    modules: {
      dogs: dogsModule
    },
    state: {
      user: null
    },
    mutations: {
      setUser(state, user) {
        state.user = user
      },
      logout(state) {
        state.user = null
      }
    },
    actions: {
      /*
      async nuxtServerInit({ dispatch }) {
        await dispatch('dogs/getAllDogs')
      },
      */
      async login({ commit }, loginForm) {
        try {
          await this.$fire.signInWithEmailAndPassword(this.$fire.auth, loginForm.email, loginForm.password)
          const token = await this.$fire.auth.currentUser.getIdToken()
          console.log('token', token)
          const { uid, displayName, email } = this.$fire.auth.currentUser
          Cookie.set('access_token', token)
          localStorage.setItem('access_token', token)
          commit('setUser', { uid, displayName, email })
        } catch (e) {
          console.log(e)
        }
      },
      async logout({ commit }) {
        try {
          Cookie.remove('access_token')
          if (process.client) {
            localStorage.removeItem('access_token')
          }
          await this.$fire.auth.signOut(this.$fire.auth)
          commit('logout')
        } catch (e) {
          console.log(e)
        }
      },
      initAuth({ commit, dispatch }, req) {
        let token
        if (req) {
          if (!req.headers.cookie) {
            return
          }
          const parsedCookie = cookieparser.parse(req.headers.cookie)
          const accessTokenCookie = parsedCookie.access_token
          if (!accessTokenCookie) {
            return
          }
          token = JWTDecode(accessTokenCookie)
        } else {
          token = JWTDecode(localStorage.getItem('access_token'))
        }
        commit('setUser', {
          uid: token.user_id,
          displayName: token.displayName,
          email: token.email
        })
      }
    },
    getters: {
      isAuth(state) {
        return state.user != null
      },
      getUserInfo(state) {
        return state.user
      }
    }
  })
}

export default createStore
