<template>

  <b-container tag="main" fluid>
    <b-nav tabs :class="'mb-1 ml-2 mr-2'">
      <b-nav-item :to="'giphy'">Giphy</b-nav-item>
      <b-nav-item :to="'js30days'">JavaScript30Days</b-nav-item>
    </b-nav>

    <b-card>
      <router-view></router-view>
    </b-card>

  </b-container>
</template>

<script>
  export default {
    name: 'AppContainer'
  }
</script>

<style scoped>
  main {
    padding: 1rem;
  }
</style>
