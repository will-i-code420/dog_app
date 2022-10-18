<template lang="html">
  <section>
    <article>
      <v-row justify="center" align="center">
        <v-col sm="10" md="8" xl="6">
          <h1>Admin Page for {{ userInfo.displayName }}</h1>
        </v-col>
      </v-row>
    </article>
    <article>
      <h2 class="my-5 text-center">All Dogs</h2>
      <v-btn
        text
        nuxt
        to="/admin/new-dog"
      >
        Add New Dog
      </v-btn>
      <DogList :dogs="loadedDogs"/>
    </article>
  </section>
</template>

<script>
export default {
  middleware: ['check-auth', 'auth'],
  computed: {
    userInfo() {
      return this.$store.getters.getUserInfo
    },
    loadedDogs() {
      return this.$store.getters['dogs/getAllDogs']
    }
  }
}
</script>

<style lang="css" scoped>
</style>
