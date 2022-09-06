<template lang="html">
  <v-row>
    <v-col xl="2" md="3" sm="6" v-for="dog in dogs" :key="dog.id">
      <DogPreview :dog="dog" />
    </v-col>
  </v-row>
</template>

<script>
import DogPreview from '~/components/dogs/DogPreview.vue'
export default {
  components: {
    DogPreview
  },
  props: {
    dogs: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="css" scoped>
</style>
