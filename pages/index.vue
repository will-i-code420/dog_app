<template>
  <section>
    <article class="">
      <TheHero />
    </article>
    <article class="">
      <h2 class="my-5 text-center">Current Puppies Available</h2>
      <DogList />
    </article>
  </section>
</template>

<script>
import DogList from '~/components/dogs/DogList.vue'
export default {
  name: 'IndexPage',
  components: {
    DogList
  }
}
</script>
