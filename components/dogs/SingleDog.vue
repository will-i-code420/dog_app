<template lang="html">
  <v-row justify="center" align="center">
    <v-col cols="10">
      <h2>Single Dog Componenet</h2>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    dog: {
      type: Object,
      required: false
    }
  }
}
</script>

<style lang="css" scoped>
</style>
