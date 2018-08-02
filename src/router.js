import Vue          from 'vue'
import Router       from 'vue-router'
import AppContainer from './AppContainer'

const giphy     = () => import ('./components/GiphyTab')
const js30days  = () => import ('./components/JavaScript30Days')
const webcamFun = () => import ('./components/JavaScript30Days/19-WebcamFun')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path:      '/',
      name:      'home',
      component: AppContainer,
      redirect:  {name: window.localStorage.getItem('router') || 'giphy'},
      children:  [
        {
          path:      'giphy',
          name:      'giphy',
          component: giphy,
        },
        {
          path:      'js30days',
          name:      'js30days',
          component: js30days,
        },
        {
          path:      'webcam',
          name:      'webcamFun',
          component: webcamFun
        }
      ]
    },
    {path: '*', redirect: '/'}
  ]
})

router.afterEach(to => window.localStorage.setItem('router', to.name))

export default router
