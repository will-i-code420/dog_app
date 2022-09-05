<template>
  <section>
    <TheHero />
    <h2 class="my-5 text-center">Current Puppies Available</h2>
    <v-row>
      <v-col cols="3">
        <DogPreview />
      </v-col>
      <v-col cols="3">
        <DogPreview />
      </v-col>
      <v-col cols="3">
        <DogPreview />
      </v-col>
      <v-col cols="3">
        <DogPreview />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import DogPreview from '~/components/dogs/DogPreview.vue'
export default {
  name: 'IndexPage',
  components: {
    DogPreview
  }
}
</script>
