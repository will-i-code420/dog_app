<template lang="html">
  <h1>Admin Page</h1>
</template>

<script>
export default {
  middleware: ['check-auth', 'auth']
}
</script>

<style lang="css" scoped>
</style>
