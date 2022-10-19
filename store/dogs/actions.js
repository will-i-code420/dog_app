export default {
  async getAllDogs({ commit }) {
    try {
      const allDogsQuery = await this.$fire.getDocs(this.$fire.collection(this.$fire.db, 'dogs'))
      const allDogs = []
      allDogsQuery.forEach((dog, i) => {
        const newDog = { id: dog.id, ...dog.data() }
        allDogs.push(newDog)
      })
      commit('setDogs', allDogs)
    } catch (e) {
      console.log(e)
    }
  },
  async addDog({ commit }, dogForm) {
    const res = await this.$fire.addDoc(this.$fire.collection(this.$fire.db, 'dogs'), { ...dogForm })
    const newDog = { id: res.id, ...res.data()}
    commit('addDog', newDog)
  },
  async editDog({ commit }, dogForm) {
    try {
      const dogRef = this.$fire.doc(this.$fire.db, 'dogs', dogForm.id)
      await this.$fire.updateDoc(dogRef, dogForm)
      commit('editDog', dogForm)
    } catch (e) {
      console.log(e)
    }
  }
}
