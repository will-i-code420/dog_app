<template lang="html">
  <v-card>
    <v-img src="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg" />
    <v-card-title class="justify-center text-uppercase">
      {{ dog.name }}
    </v-card-title>
    <v-card-actions class="justify-center">
      <v-btn color="info" text nuxt :to="{ path: `/dogs/${dog.name}` }">
        View
      </v-btn>
      <v-btn v-if="isAuth" class="danger" text nuxt :to="{ path: `/admin/${dog.id}` }">
        Edit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    dog: {
      type: Object,
      required: true
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuth
    }
  }
}
</script>

<style lang="css" scoped>
</style>
