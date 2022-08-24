<template>
  <v-app dark>
    <TopNav />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <BottomNav />
  </v-app>
</template>

<script>
import TopNav from '~/components/navigation/TopNav.vue'
import BottomNav from '~/components/navigation/BottomNav.vue'

export default {
  name: 'DefaultLayout',
  components: {
    TopNav,
    BottomNav
  }
}
</script>

<style>
  html {
    font-family: 'Roboto', sans-serif;
  }
</style>
