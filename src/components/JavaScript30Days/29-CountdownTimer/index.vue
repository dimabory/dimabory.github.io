<template src="./index.html"></template>

<script>
  import { init } from './index.vanilla'
  import * as raw from '!raw-loader!./index.vanilla.js'

  import mixin from '../mixin'

  const title = document.title

  export default {
    name:   'CountdownTimer',
    mixins: [mixin(() => ({raw}), init)],
    destroyed () {
      clearInterval(window.countdown)
      document.title = title
    }
  }
</script>

<style scoped src="./style.css"></style>
