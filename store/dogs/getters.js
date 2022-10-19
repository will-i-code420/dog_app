export default {
  getAllDogs(state) {
    return state.allDogs
  },
  getDogById: state => (id) => {
    return state.allDogs.find(dog => dog.id === id)
  }
}
