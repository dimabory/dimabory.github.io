import Vue              from 'vue'
import Router           from 'vue-router'
import AppContainer     from './AppContainer'
import GiphyTab         from './components/GiphyTab'
import JavaScript30Days from './components/JavaScript30Days'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:      '/',
      name:      'home',
      component: AppContainer,
      redirect:  '/giphy',
      children:  [
        {
          path:      'giphy',
          name:      'giphy',
          component: GiphyTab
        },
        {
          path:      'js30days',
          name:      'js30days',
          component: JavaScript30Days,
        }
      ]
    },
  ]
})
