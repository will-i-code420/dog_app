<template>
  <section>
    <article class="">
      <TheHero />
    </article>
    <article class="">
      <h2 class="my-5 text-center">Current Puppies Available</h2>
      <DogList :dogs="loadedDogs"/>
    </article>
  </section>
</template>

<script>
import DogList from '~/components/dogs/DogList.vue'
export default {
  name: 'IndexPage',
  components: {
    DogList
  },
  computed: {
    loadedDogs() {
      return this.$store.getters['dogs/getAllDogs']
    }
  }
}
</script>
