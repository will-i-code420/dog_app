<template lang="html">
  <v-row justify="center" align="center">
    <v-col sm="10" md="8" xl="6">
      <NewDog />
    </v-col>
  </v-row>
</template>

<script>
import NewDog from '~/components/dogs/NewDog.vue'

export default {
  components: {
    NewDog
  }
}
</script>

<style lang="css" scoped>
</style>
