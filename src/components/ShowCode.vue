<template>
  <div class="container">
    <div class="row justify-content-center">
      <b-btn v-b-toggle.code>Show Code</b-btn>
    </div>
    <transition name="fade" mode="out-in">
      <b-collapse id="code" class="mt-2">
        <b-card>
          <pre v-highlightjs="raw"><code :class="['javascript', 'style']"></code></pre>
        </b-card>
      </b-collapse>
    </transition>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueHighlightJS from 'vue-highlightjs'

  import 'highlight.js/styles/default.css'
  import 'highlight.js/styles/atom-one-dark.css'

  Vue.use(VueHighlightJS)

  export default {
    name: 'ShowCode',
    props: {
      raw: {
        type: String,
        required: true,
      },
      _style: {
        type: String,
        default: 'atom-one-dark',
        validator: function (value) {
          return ['default', 'atom-one-dark'].indexOf(value) !== -1
        }
      }
    }
  }
</script>

<style scoped>

</style>
