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
    const data = await this.$fire.addDoc(this.$fire.collection(this.$fire.db, 'dogs'), { ...dogForm })
    console.log(data)
  }
}
