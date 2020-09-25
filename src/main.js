import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import request from './utils/request'

Vue.use(MintUI)
Vue.prototype.$http = request;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')