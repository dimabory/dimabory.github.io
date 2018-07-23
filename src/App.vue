<template>
  <div id="app">
    <AppTopBar/>
    <router-view></router-view>
    <!--<AppFooter/>-->
  </div>
</template>

<script>
  import AppTopBar from './AppTopBar'
  import AppFooter from './AppFooter'

  export default {
    name:       'app',
    components: {AppFooter, AppTopBar}
  }
</script>

<style src="./assets/css/app.css"></style>
<style src="./assets/css/_variables.css"></style>
