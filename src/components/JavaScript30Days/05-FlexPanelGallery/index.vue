<template src="./index.html"></template>

<script>
  import { init }    from './index.vanilla'
  import * as raw    from '!raw-loader!./index.vanilla.js'
  import * as cssRaw from '!raw-loader!./style.css'

  const ShowCode = () => import('@/components/ShowCode')

  import mixin from '../mixin'

  export default {
    name:       'FlexPanelGallery',
    components: {ShowCode},
    mixins:     [mixin(() => ({raw}), init)],
    data:       () => ({cssRaw})
  }
</script>

<style scoped src="./style.css"></style>
