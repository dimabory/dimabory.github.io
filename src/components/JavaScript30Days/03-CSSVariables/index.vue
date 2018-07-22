<template src="./index.html"></template>

<script>
  import { init } from './index.vanilla'
  import * as raw from '!raw-loader!./index.vanilla.js'

  import mixin from '../mixin'

  const BASE_VAR    = '--03-css-variables-base'
  const SPACING_VAR = '--03-css-variables-spacing'
  const BLUR_VAR    = '--03-css-variables-blur'

  const cssVariablesComputedProperty = key => ({
    get () {
      return window.localStorage.getItem(key) || ''
    },
    set (value) {
      return window.localStorage.setItem(key, value)
    }
  })

  export default {
    name: 'CSSVariables',
    mixins: [mixin(() => ({raw}), init)],
    computed: {
      base: cssVariablesComputedProperty(BASE_VAR),
      spacing: cssVariablesComputedProperty(SPACING_VAR),
      blur: cssVariablesComputedProperty(BLUR_VAR)
    },
    mounted () {
      document.documentElement.style.setProperty(this.$refs.base.name, this.base)
      this.$refs.base.value = this.base
    }
  }
</script>

<style scoped src="./style.css"></style>
