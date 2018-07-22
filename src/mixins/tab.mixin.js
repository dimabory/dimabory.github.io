export default function (tabs, storageKey) {

  return {
    data: () => ({
      tabs,
      activeTabIndex: window.localStorage.getItem(storageKey)
    }),
    computed: {
      activeTab: {
        get: function () {
          return this.activeTabIndex
        },
        set: function (index) {

          console.log('SET ACTIVE', index)

          window.localStorage.setItem(storageKey, index)

          this.activeTabIndex = index
        }
      }
    },
    created () {
      const index = window.localStorage.getItem(storageKey)

      console.log('CREATED', this)

      if (index) {
        this.tabs[index].active = true
      }
    }
  }

}
