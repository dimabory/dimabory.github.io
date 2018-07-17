<template>
    <b-container tag="main" fluid>
        <b-card no-body>
            <b-tabs pills card @input="setActiveTabIndex">
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
  const giphyComponent = () => import('./components/GiphyTab')
  // const wordsApiComponent = () => import('./components/WordsApiTab')
  // const icanhazdadjokeComponent = () => import('./components/IcanhazdadjokeTab')

  const ACTIVE_TAB_INDEX_STORAGE_KEY = 'active_tab'

  export default {
    name: 'AppContainer',
    data: () => ({
      tabs: [
        {title: 'Giphy', component: giphyComponent, active: false},
        // {title: 'WordsAPI', component: wordsApiComponent, active: false},
        // {title: 'icanhazdadjoke', component: icanhazdadjokeComponent, active: false},
      ],
      activeTabIndex: window.localStorage.getItem(ACTIVE_TAB_INDEX_STORAGE_KEY)
    }),
    computed: {
      activeTab: {
        get: function () {
          return this.activeTabIndex
        },
        set: function (index) {
          window.localStorage.setItem(ACTIVE_TAB_INDEX_STORAGE_KEY, index)

          this.activeTabIndex = index
        }
      }
    },
    methods: {
      setActiveTabIndex (index) {
        if (this.activeTab !== index) {
          this.activeTab = index
        }
      }
    },
    created () {
      const index = window.localStorage.getItem(ACTIVE_TAB_INDEX_STORAGE_KEY)
      this.tabs[index].active = true
    }
  }
</script>

<style scoped>
    main {
        padding: 10px;
    }
</style>