<template lang="html">
  <nav>
    <v-app-bar app flat>
      <v-app-bar-title>
        {{ title }}
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="(item,i) in navItems"
        :key="i"
        plain
        nuxt
        :to="item.to"
        class="mx-3 hidden-sm-and-down"
      >
        {{ item.title }}
      </v-btn>
      <v-app-bar-nav-icon @click="mobile = !mobile" class="hidden-md-and-up"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer app right v-model="mobile" temporary floating>
      <v-list
        nav
      >
        <v-list-item
          v-for="(item,i) in navItems"
          :key="i"
          nuxt
          exact
          :to="item.to"
        >
          <v-list-item-action v-if="item.icon">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: 'TopNav',
  data() {
    return {
      title: 'Knuckles Kids',
      mobile: false,
      navItems: [
        { icon: '', title: 'Our Dogs', to: '/dogs' },
        { icon: '', title: 'About', to: '/about' },
        { icon: '', title: 'Contact', to: '/contact' }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
