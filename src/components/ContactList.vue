<template>
  <div class="list-group">
      <router-link
      class="list-group-item list-group-item-action"
      tag="button"
      :to="{ name: 'contact-details', params: { id: contact.id }}"
      exact-active-class="active"
      v-for="(contact, key) in contacts" 
      :key="key" 
      >
      {{contact.first_name}} {{contact.last_name}}
      </router-link>
  </div>
</template>

<script>
import {contactService} from '../service/ContactService'
export default {
  data(){
    return{
      contacts: []
    }
  },
  created(){
    contactService.getAll()
    .then((response) => {
      this.contacts=response.data
    })
  }
}
</script>
