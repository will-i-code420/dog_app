<template lang="html">
  <LoginForm @login-user="login"/>
</template>

<script>
export default {
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
