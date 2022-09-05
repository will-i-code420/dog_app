<template lang="html">
  <v-row justify="center" align="center">
    <v-col>
      <v-card>
        <v-img
          :src="require('@/assets/images/hero-img.jpg')"
          class="align-end"
          height="80vh"
        >
          <v-card-title class="justify-center">
            Find Your New Boston Today
          </v-card-title>
          <v-card-subtitle class="text-center">
            Breeding Bostons for over 30 years
          </v-card-subtitle>
        </v-img>
        <v-row justify="center" align="center">
          <v-col cols="2">
            <v-card :to="{name: 'dogs'}">
              <v-icon>mdi-dog</v-icon>
              <v-card-title>View Puppies</v-card-title>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card :to="{name: 'about'}">
              <v-icon>mdi-school</v-icon>
              <v-card-title>Learn More</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
