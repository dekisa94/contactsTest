<template>
  <div class="container mt-4">
      <div class="row">
          <div class="col">
            <contact-list :contacts="contacts" />
          </div>
          <div class="col-8">
            <contact-details />
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
                { name: 'John Doe' },
                { name: 'Petar Markovic' },
                { name: 'Mirko Veselinovic' }
            ]
        }
    }
  
}
</script>
