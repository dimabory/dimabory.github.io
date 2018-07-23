<template>
  <div class="container">
    <slot name="toggle-btn">
      <div class="row justify-content-center">
        <b-btn v-b-toggle="id">Show Code</b-btn>
      </div>
    </slot>
    <transition name="fade" mode="out-in">
      <b-collapse :id="id" class="mt-2">
        <b-card>
          <pre v-highlightjs="raw"><code :class="[type, 'style']"></code></pre>
        </b-card>
      </b-collapse>
    </transition>
  </div>
</template>

<script>
  import Vue            from 'vue'
  import VueHighlightJS from 'vue-highlightjs'

  import 'highlight.js/styles/default.css'
  import 'highlight.js/styles/atom-one-dark.css'

  Vue.use(VueHighlightJS)

  export default {
    name:     'ShowCode',
    data:     () => ({uid: 'code_' + btoa(Math.random()).substr(5, 5)}),
    computed: {
      id () {
        return `${this.type}_${this.uid}`
      }
    },
    props:    {
      raw:    {
        type:     String,
        required: true,
      },
      type:   {
        type:    String,
        default: 'javascript'
      },
      _style: {
        type:      String,
        default:   'atom-one-dark',
        validator: function (value) {
          return ['default', 'atom-one-dark'].indexOf(value) !== -1
        }
      }
    },
    created () {
      this.uid = this._uid
    }
  }
</script>

<style scoped>

</style>
