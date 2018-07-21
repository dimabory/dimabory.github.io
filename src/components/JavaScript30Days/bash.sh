#!/usr/bin/env bash

#
# Create vue files based on folder names
#
# sh bash.sh 02-JSandCSSClock
#

createIndexVue() {
    echo "<template src=\"./index.html\"></template>

<script>
  import { init } from './index.vanilla'
  import ShowCode from '@/components/ShowCode'
  import * as raw from '!raw-loader!./index.vanilla.js'

  export default {
    name: '$2',
    components: {ShowCode},
    data: () => ({
      raw
    }),
    mounted () {
      init()
    }
  }
</script>

<style scoped src=\"./style.css\"></style>" > $1
}
createIndexHtml() {
  echo "<div class=\"container\">
  <h2 class=\"text-center\">$2</h2>
</div>" > "$1/index.html"
}

createStyle() {
  touch "$1/style.css"
}

createVanillaJs() {
  echo "export function init () {

}" > "$1/index.vanilla.js"
}

for i in "$@"; do
#  mkdir "$i"
  createIndexVue "$i/index.vue" "${i#*-*}"
  createIndexHtml "$i" "${i#*-*}"
  createStyle "$i"
  createVanillaJs "$i"
done
