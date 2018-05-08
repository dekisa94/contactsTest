<template>
  <div class="container mt-4">
      <div class="row">
          <div class="col">
            <contact-list :contacts="contacts" />
          </div>
          <div class="col-8">
            <contact-details :contact="routeContact" />
          </div>
      </div>
  </div>
</template>

<script>
import ContactList from '../components/ContactList.vue'
import ContactDetails from '../components/ContactDetails.vue'
export default {
    components:{
        ContactList,
        ContactDetails
    },
    data(){
        return{
            contacts: [
                { id: 1, name: 'John Doe', email: 'doe.joe@example.com', number: '0080-256958' },
                { id: 2, name: 'Petar Markovic', email: 'petarnjeguspetar@example.com', number: '0080-258966' },
                { id: 3, name: 'Mirko Veselinovic', email: 'mirkoviks@example.com', number: '0080-589965' }
            ]
        }
    },
    computed:{
        routeContact(){
            return this.contacts.find(contact => contact.id == this.$route.params.id)
        }
    }
  
}
</script>
