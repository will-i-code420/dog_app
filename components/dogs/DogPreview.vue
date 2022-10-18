<template lang="html">
  <v-card :to="{ path: `/dogs/${dog.name}` }">
    <v-img src="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg">
    </v-img>
      <v-card-title class="justify-center text-uppercase">
        {{ dog.name }}
      </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    dog: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="css" scoped>
</style>
