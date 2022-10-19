export default {
  setDogs(state, dogs) {
    state.allDogs = dogs
  },
  addDog(state, dog) {
    state.allDogs.push(dog)
  },
  editDog(state, editedDog) {
    const dogIdx = state.allDogs.findIndex(dog => dog.id === editedDog.id)
    state.allDogs[dogIdx] = editedDog
  }
}
