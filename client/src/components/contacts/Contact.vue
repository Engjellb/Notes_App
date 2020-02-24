<template>
  <panel title="Contact Us"> 
    <v-form @submit.prevent="Send">
      <v-text-field label="First name" v-model="contacts.firstName"></v-text-field>
      <v-text-field label="Last name" v-model="contacts.lastName"></v-text-field>
      <v-text-field label="Phone number" v-model="contacts.phoneNumber"></v-text-field>
      <v-text-field label="Email" v-model="contacts.email"></v-text-field>
      <v-textarea label="Message" v-model="contacts.message"></v-textarea>
      <v-btn class="light-green" text dark type="submit">Send</v-btn>
    </v-form>
  </panel>
</template>

<script>
import Panel from '../Panel';
import axios from 'axios';

/*eslint-disable*/
export default {
  components: {
    Panel
  },
  data () {
    return {
      contacts: {}
    }
  },
  methods: {
    Send () {
      axios.post('http://localhost:8081/contacts/', this.contacts)
        .then((response) => {
          console.log(response);
          this.contacts.firstName = '';
          this.contacts.lastName = '';
          this.contacts.phoneNumber = '';
          this.contacts.email = '';
          this.contacts.message = '';
        })
    }
  }   
}
</script>