import Vue                 from 'vue'
import App                 from './App.vue'
import router              from './router'
import BootstrapVue        from 'bootstrap-vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)

import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

router.afterEach(to => window.localStorage.setItem('router', to.name))

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
