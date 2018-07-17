<template>
    <footer class="footer">
        <b-container>
            <span class="text-muted">
                        <font-awesome-icon :icon="['fas', 'copyright']" size="lg"/> Dmytro Borysovskyi {{year}}</span>
        </b-container>
    </footer>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faCopyright } from '@fortawesome/free-solid-svg-icons'

  library.add(faCopyright)
  export default {
    name: 'AppFooter',
    computed: {
      year () {
        return (new Date()).getFullYear()
      }
    }
  }
</script>

<style scoped>
    footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px;
        line-height: 60px;
        background-color: #f5f5f5;
    }

    .footer > .container {
        width: auto;
        max-width: 680px;
        padding: 0 15px;
    }
</style>