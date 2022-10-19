<template lang="html">
  <v-row>
    <v-col xl="2" md="3" sm="6" v-for="dog in dogs" :key="dog.id">
      <DogPreview :admin="admin" :dog="dog" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    dogs: {
      type: Array,
      required: true
    },
    admin: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="css" scoped>
</style>
