import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'


import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCircle, faBell, faAngleDown, faAngleUp, faFilter, faChartLine } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(VueRouter)

Vue.use(Buefy)

library.add(faUserCircle, faBell, faAngleDown, faAngleUp, faFilter, faChartLine)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
