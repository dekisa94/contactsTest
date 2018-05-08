import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Contacts from './pages/Contacts.vue'
import AddContact from './pages/AddContact.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/contacts'},
  {path: '/contacts', component: Contacts, name: 'contacts'},
  {path: '/add-contact', component : AddContact},
  {path: '/contacts/:id', component: Contacts, name: 'contact-details'}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
