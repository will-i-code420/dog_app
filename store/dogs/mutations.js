export default {
  setDogs(state, dogs) {
    state.allDogs = dogs
  },
  addDog(state, dog) {
    state.allDogs.push(dog)
  }
}
