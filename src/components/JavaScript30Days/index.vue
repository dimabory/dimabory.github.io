<template>
  <div id="js-30-days">

    <div class="row justify-content-end">
      <a href="https://javascript30.com/" target="_blank" class="badge badge-secondary">JavaScript 30 Day
        Challenge</a>
      <a href="https://github.com/wesbos/JavaScript30" target="_blank" class="badge badge-dark mr-3">Github</a>
    </div>

    <b-card no-body>

      <b-tabs pills card vertical navWrapperClass="col-12 col-sm-3 col-md-2" contentClass="col-sm-9 col-md-10" @input="activeTab = $event">

        <b-tab :title="i.title" v-for="(i, key) in tabs" :key="key" :active="i.active">

          <transition name="fade" mode="out-in" appear>
            <keep-alive>
              <component :is="i.component" @mounted="showCode(key, $event.raw)"></component>
            </keep-alive>
          </transition>

          <template v-if="i.raw">
            <keep-alive>
              <show-code :raw="i.raw"></show-code>
            </keep-alive>
          </template>

          <template v-else>
            <div class="row justify-content-center">
              <font-awesome-icon :class="'frog-icon'" class="text-primary" :icon="['fas', 'frog']" size="lg"/>
            </div>
          </template>

        </b-tab>

      </b-tabs>

    </b-card>

  </div>
</template>

<script>
  import mixin       from '@/mixins/tab.mixin.js'
  import tabs        from './tabs'
  import { faFrog }  from '@fortawesome/free-solid-svg-icons'
  import { library } from '@fortawesome/fontawesome-svg-core'

  library.add(faFrog)

  const ShowCode = () => import('../ShowCode')

  const ACTIVE_TAB_INDEX_STORAGE_KEY = '30_days_js_active_tab'

  export default {
    name: 'JavaScript30Days',
    components: {ShowCode},
    mixins: [mixin.call(this, tabs, ACTIVE_TAB_INDEX_STORAGE_KEY)],
    methods: {
      showCode (i, data) {
        this.$nextTick(() => {
          this.tabs[i].raw = data
        })
      }
    }
  }
</script>

<style scoped>
  #js-30-days >>> .card-header {
    padding: 0.75rem 0.3rem;
  }

  /*
   * or scss
   #js-30-days {
      /deep/ .card-header {}
   }
   */

  .frog-icon {
    transition: all 1s;
    animation: scale-frog 1s infinite both ease-in;
  }

  @keyframes scale-frog {
    from {
      transform: scale(1);
    }

    to {
      transform: scale(1.5);
    }
  }
</style>
