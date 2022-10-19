<template lang="html">
  <v-row justify="center" align="center">
    <v-col sm="10" md="8" xl="6">
      <DogForm :dog="dog" @submit-dog="submitDog" />
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
    }
  }
}
</script>

<style lang="css" scoped>
</style>
