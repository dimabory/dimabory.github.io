<template src="./index.html"></template>
<script>
  import { init } from './index.vanilla.js'
  import ShowCode from '@/components/ShowCode'
  import * as raw from '!raw-loader!./index.vanilla.js'

  export default {
    name: 'DrumKit',
    components: {ShowCode},
    data: () => ({
      raw
    }),
    mounted () {
      console.log(typeof init)
      init()
    }
  }
</script>
<style scoped src="./style.css"></style>
