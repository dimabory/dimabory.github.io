<template>
    <div id="app">
        <AppTopBar/>
        <AppContainer/>
        <!--<AppFooter/>-->
    </div>
</template>

<script>
  import AppTopBar from './AppTopBar'
  import AppContainer from './AppContainer'
  import AppFooter from './AppFooter'

  export default {
    name: 'app',
    components: {AppFooter, AppContainer, AppTopBar}
  }
</script>

<style src="./assets/css/_variables.css"></style>
