<template>
  <div class="container mt-4">
      <div class="row">
          <div class="col">
            <contact-list :contacts='contacts'/>
          </div>
          <div class="col-8">
            <contact-details :contact="routeContact" @onDelete="deleteContact"/>
          </div>
      </div>
  </div>
</template>

<script>
import ContactList from '../components/ContactList.vue'
import ContactDetails from '../components/ContactDetails.vue'
import {contactService} from '../service/ContactService'
export default {
    components:{
        ContactList,
        ContactDetails
    },
    data(){
        return{
            contacts:[]
        }
    },
    computed:{
        routeContact(){
            return this.contacts.find(contact => contact.id == this.$route.params.id)
        }
    },
    created(){
        
            contactService.getAll()
            .then((response) => {
                this.contacts=response.data
            })
            
        
    },
    methods:{
        deleteContact(id){
            this.contacts = this.contacts.filter(contact => contact.id !== id)
        }
    }
  
}
</script>
