<template src="./index.html"></template>

<script>
  import { init } from './index.vanilla'
  import * as raw from '!raw-loader!./index.vanilla.js'

  import mixin from '../mixin'

  export default {
    name: 'EventCapturePropogationBubblingAndOnce',
    mixins: [mixin(() => ({raw}), init)],
  }
</script>

<style scoped src="./style.css"></style>
