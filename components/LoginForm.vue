<template lang="html">
  <v-form @submit.prevent="login">
    <v-text-field type="email" v-model="loginForm.email" required placeholder="email@email.com">
    </v-text-field>
    <v-text-field type="password" v-model="loginForm.password" required placeholder="password">
    </v-text-field>
    <v-btn color="primary" type="submit">
      Login
    </v-btn>
  </v-form>
</template>

<script>
export default {
  emits: ['login-user'],
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      this.$emit('login-user', this.loginForm)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
