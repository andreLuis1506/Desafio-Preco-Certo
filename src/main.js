import Vue from 'vue'
import App from './App.vue'
import router from "./router";

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCircle, faBell, faAngleDown, faAngleUp, faFilter, faChartLine } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(Buefy)

library.add(faUserCircle, faBell, faAngleDown, faAngleUp, faFilter, faChartLine)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
