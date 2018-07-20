<template src="./index.html"></template>

<script>
  import { init } from './index.vanilla'
  import ShowCode from '@/components/ShowCode'
  import * as raw from '!raw-loader!./index.vanilla.js'

  export default {
    name: '17-SortWithoutArticles',
    components: {ShowCode},
    data: () => ({
      raw
    }),
    mounted () {
      init()
    }
  }
</script>

<style scoped src="./style.css"></style>
