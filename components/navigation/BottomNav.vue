<template lang="html">
  <v-footer dark padless>
    <v-card
      width="100%"
      flat
      tile
      class="text-center"
    >
      <v-card-text>
        <v-btn
          v-for="(item,i) in navItems"
          :key="i"
          icon
          :href="item.to"
          target="_blank"
          rel="noopener noreferrer"
          class="mx-5"
        >
          <v-icon size="24px">
            {{ item.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text>
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'BottomNav',
  data() {
    return {
      navItems: [
        { icon: 'mdi-facebook', title: 'Facebook', to: 'https://www.facebook.com/' },
        { icon: 'mdi-twitter', title: 'Twitter', to: 'https://www.twitter.com/' },
        { icon: 'mdi-instagram', title: 'Instagram', to: 'https://www.instagram.com/' }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
