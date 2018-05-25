import Vue from 'vue'
import VueRouter from 'vue-router'

import Contacts from './../pages/Contacts.vue'
import AddContact from './../pages/AddContact.vue'
import Login from './../pages/Login.vue'
import { requiresAuth, guestOnly } from './guards';


Vue.use(VueRouter)

const routes = [
    {path: '/', redirect: '/contacts'},
    {path: '/contacts', component: Contacts, name: 'contacts', meta: {requiresAuth: true}},
    {path: '/add-contact', component : AddContact, meta: {requiresAuth: true}},
    {path: '/contacts/:id', component: Contacts, name: 'contact-details'},
    {path: '/edit/:id', component: AddContact, name: 'edit', meta: {requiresAuth: true}},
    {path: '/login', component: Login, name: 'login', meta: {guestOnly: true}}
  ]
  
  const router = new VueRouter({
    routes,
    mode: 'history'
  })

  router.beforeEach((to, from, next) => {
      Promise.resolve(to).then(requiresAuth).then(guestOnly).then(() => {
          next()
      }).catch(redirect => {
          next(redirect)
      })
  })
  
  export default router