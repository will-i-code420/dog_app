<template lang="html">
  <v-row justify="center" align="center">
    <v-col sm="10" md="8" xl="6">
      <DogForm />
    </v-col>
  </v-row>
</template>

<script>
export default {
  middleware: ['check-auth', 'auth']
}
</script>

<style lang="css" scoped>
</style>
