export default {
  async nuxtServerInit({ commit }, context) {
    const dogs = await context.app.$axios.$get('/dogs.json')
    console.log(dogs)
  }
}
