<template src="./index.html"></template>

<script>
  import * as cornify from './cornify'
  import { init }     from './index.vanilla'
  import * as raw     from '!raw-loader!./index.vanilla.js'

  import mixin from '../mixin'

  export default {
    name:   'KeySequenceDetection',
    mixins: [mixin(() => ({raw}))],
    created () {
      this.$on('mounted', () => {
        init(cornify)
      })
    },
    beforeDestroy () {
      cornify.cornami.clear_input()
      document.querySelectorAll('.cornify').forEach(el => el.remove())
    }
  }
</script>

<style scoped src="./style.css"></style>
