import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Contacts from './pages/Contacts.vue'
import AddContact from './pages/AddContact.vue'
import MyDirectives from './plugins/MyDirectives'
import Login from './pages/Login.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(MyDirectives)

const routes = [
  {path: '/', redirect: '/contacts'},
  {path: '/contacts', component: Contacts, name: 'contacts'},
  {path: '/add-contact', component : AddContact},
  {path: '/contacts/:id', component: Contacts, name: 'contact-details'},
  {path: '/edit/:id', component: AddContact, name: 'edit'},
  {path: '/login', component: Login, name: 'login'}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
