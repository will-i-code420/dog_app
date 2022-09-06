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
  data() {
    return {
      dogs: [
        { id: '1', name: 'Bebe', dob: '01/20/2003', sex: 'F', description: 'Fun loving girl who enjoys treats and love', location: 'Tucson, AZ', parents: 'Hoover & Tiggy', color: 'black and white' },
        { id: '2', name: 'Knuckles', dob: '05/20/2010', sex: 'M', description: 'Big goof ball who likes to play and enjoys laying in flowers', location: 'Nogales, AZ', parents: 'Unknown', color: 'black and white' },
        { id: '3', name: 'Xena', dob: '04/20/2022', sex: 'F', description: 'Fiesty little princess who is #1 and knows it', location: 'Casa Grand, AZ', parents: 'Unknown', color: 'Blue and White' }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
