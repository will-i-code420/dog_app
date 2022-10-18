<template lang="html">
  <v-row justify="center" align="center">
    <v-col sm="10" md="8" xl="6">
      <LoginForm @login-user="login" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  middleware: ['check-auth'],
  methods: {
    async login(loginForm) {
      try {
        await this.$store.dispatch('login', loginForm)
        this.$router.push('/admin')
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
