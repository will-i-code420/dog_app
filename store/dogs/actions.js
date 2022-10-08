import { collection, getDocs } from 'firebase/firestore'
import { db } from '~/plugins/firebase.js'

export default {
  async getAllDogs({ commit }) {
    try {
      const allDogsQuery = await getDocs(collection(db, 'dogs'))
      const allDogs = []
      allDogsQuery.forEach((dog, i) => {
        const newDog = { id: dog.id, ...dog.data() }
        allDogs.push(newDog)
      })
      commit('setDogs', allDogs)
    } catch (e) {
      console.log(e)
    }
  }
}
