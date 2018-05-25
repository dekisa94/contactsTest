import Vue from 'vue'
import App from './App.vue'

import MyDirectives from './plugins/MyDirectives'
import router from './router'


Vue.config.productionTip = false

Vue.use(MyDirectives)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
