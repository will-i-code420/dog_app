<template lang="html">
  <v-row justify="center" align="center">
    <v-col sm="10" md="8" xl="6">
      <v-form @submit.prevent="login">
        <v-text-field type="email" v-model="loginForm.email" required>
        </v-text-field>
        <v-text-field type="password" v-model="loginForm.password" required>
        </v-text-field>
        <v-button color="primary" type="submit">
          Login
        </v-button>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  emits: ['login-user'],
  data () {
    return {
      loginForm: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      emit('login-user', this.loginForm)
      try {
        await this.$store.dispatch('login', this.loginForm)
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
