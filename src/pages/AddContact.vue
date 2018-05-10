<template>
    <div class="container">
        <form @submit.prevent="submit">
            <h2>Add contact</h2>
            <div class="form-group">
                <label for="name">First name</label>
                <input v-model="newContact.first_name" type="text" id="name" name="first_name" class="form-control" required/>
            </div>
            <div class="form-group">
                <label for="lastname">Last name</label>
                <input v-model="newContact.last_name" type="text" id="lastname" name="last_name" class="form-control" required/>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input v-model="newContact.email" type="email" id="email" name="email" class="form-control" required/>
            </div>
            <div class="form-group">
                <label for="number">Number</label>
                <input v-model="newContact.number" type="text" id="number" name="number" class="form-control" required/>
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
          newContact: {first_name: '', last_name: '', email: '', number: ''}
      }
  },
  methods:{
      submit(){
          contactService.addContact(this.newContact)
      }
  }
}
</script>
