<template>
  <v-app dark>
    <TopNav />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
import TopNav from '~/components/navigation/TopNav.vue'

export default {
  name: 'DefaultLayout',
  components: {
    TopNav
  }
}
</script>

<style>
  html {
    font-family: 'Roboto', sans-serif;
  }
</style>
