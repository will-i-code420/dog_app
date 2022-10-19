<template lang="html">
  <v-row justify="center" align="center">
    <v-col sm="10" md="8" xl="6">
      <DogForm :dog="dog" @submit-dog="submitDog" @remove-dog="removeDog" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  middleware: ['check-auth', 'auth'],
  computed: {
    dog() {
      return this.$store.getters['dogs/getDogById'](this.$route.params.dogId)
    }
  },
  methods: {
    async submitDog(dogForm) {
      try {
        await this.$store.dispatch('dogs/editDog', dogForm)
        this.$router.push('/admin')
      } catch (e) {
        console.log(e)
      }
    },
    async removeDog(dogId) {
      try {
        await this.$store.dispatch('dogs/deleteDog', dogId)
        this.$router.push('/admin')
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
