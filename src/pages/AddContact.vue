<template>
    <div class="container">
         <form v-validate="validationConfig"> 
            <h2>{{ this.$route.params.id ? 'EDIT CONTACT' :  'ADD CONTACT'}}</h2>
            <div class="form-group">
                <label for="name">First name</label>
                <input 
                    v-focus
                    v-model="newContact.first_name" 
                    type="text" 
                    id="name" 
                    name="first_name" 
                    class="form-control" 
                    
                />
            </div>
            <div class="form-group">
                <label for="lastname">Last name</label>
                <input 
                    v-model="newContact.last_name" 
                    type="text" 
                    id="lastname" 
                    name="last_name" 
                    class="form-control" 
                />
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input 
                    v-model="newContact.email" 
                    type="text" 
                    id="email" 
                    name="email" 
                    class="form-control" 
                />
            </div>
            <div class="form-group">
                <label for="number">Number</label>
                <input 
                    v-model="newContact.number" 
                    type="text" 
                    id="number" 
                    name="number" 
                    class="form-control" 
                />
            </div>
            <input type="submit" class="btn btn-primary" />
        </form>
    </div>
</template>

<script>
import {contactService} from '../service/ContactService'
export default {
  data(){
      return{
          newContact: {first_name: '', last_name: '', email: '', number: ''},
          validationConfig:{
            validationRules: {email: ['required', 'email']},
            submitCallback:() => {
                console.log('radi')
            }
          }
      }
  },
  methods:{
      submit(){
          if(this.$route.params.id)
          {
              contactService.edit(this.$route.params.id, this.newContact)
              .then(() => {
                  this.$router.push('/contacts')
              })
              
          }else{
            contactService.addContact(this.newContact)
            .then(() => {
                this.$router.push('/contacts')
            })
            
          }
      }
  },
  created(){
      if(this.$route.params.id){
        contactService.get(this.$route.params.id)
        .then((response) => {
            this.newContact=response.data
        }).catch((error) => {
            console.log(error)
        })
      }
  }
}
</script>
