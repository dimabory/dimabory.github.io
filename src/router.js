import Vue          from 'vue'
import Router       from 'vue-router'
import AppContainer from './AppContainer'

const giphy    = () => import ('./components/GiphyTab')
const js30days = () => import ('./components/JavaScript30Days')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:      '/',
      name:      'home',
      component: AppContainer,
      redirect:  window.localStorage.getItem('router') || 'giphy',
      children:  [
        {
          path:      'giphy',
          name:      'giphy',
          component: giphy
        },
        {
          path:      'js30days',
          name:      'js30days',
          component: js30days,
        }
      ]
    },
  ]
})
