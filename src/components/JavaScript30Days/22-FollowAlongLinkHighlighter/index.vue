<template src="./index.html"></template>

<script>
  import { init } from './index.vanilla'
  import * as raw from '!raw-loader!./index.vanilla.js'

  import mixin from '../mixin'

  export default {
    name: 'FollowAlongLinkHighlighter',
    mixins: [mixin(() => ({raw}), init)],
  }
</script>

<style scoped src="./style.css"></style>
<style>
  .highlight {
    transition: all 0.2s;
    border-bottom: 2px solid var(--secondary);
    position: absolute;
    top: 0;
    background: var(--secondary);
    opacity: .2;
    left: 0;
    border-radius: 20px;
    display: block;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
</style>
