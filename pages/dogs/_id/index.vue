<template lang="html">
  <div class="">
    <SingleDog />
    <h1>Individual Dog Page</h1>
    <h2>Dog Id: {{$route.params.id}}</h2>
  </div>
</template>

<script>
import SingleDog from '~/components/dogs/SingleDog.vue'
export default {
  components: {
    SingleDog
  }
}
</script>

<style lang="css" scoped>
</style>
