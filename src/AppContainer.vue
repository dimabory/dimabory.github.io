<template>
  <b-container tag="main" fluid>
    <b-card no-body>
      <b-tabs pills card @input="activeTab = $event">
        <b-tab :title="i.title" v-for="(i, key) in tabs" :key="key" :active="i.active">
          <transition name="fade" mode="out-in" appear>
            <keep-alive>
              <component :is="i.component"></component>
            </keep-alive>
          </transition>
        </b-tab>
      </b-tabs>
    </b-card>
  </b-container>
</template>

<script>
  import mixin from './mixins/tab.mixin'

  const tabs = [
    {title: 'Giphy', component: () => import('./components/GiphyTab'), active: false},
    {title: 'JavaScript30Days', component: () => import('./components/JavaScript30Days'), active: false},
  ]

  // const wordsApiComponent = () => import('./components/WordsApiTab')
  // const icanhazdadjokeComponent = () => import('./components/IcanhazdadjokeTab')

  const ACTIVE_TAB_INDEX_STORAGE_KEY = 'active_tab'

  export default {
    name: 'AppContainer',
    mixins: [mixin.call(this, tabs, ACTIVE_TAB_INDEX_STORAGE_KEY)],
  }
</script>

<style scoped>
  main {
    padding: 10px;
  }
</style>
