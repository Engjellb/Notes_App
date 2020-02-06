<template>
  <panel title="Sign Up">
    <v-form>
      <v-text-field label="First Name" name="Firstname" v-model="users.Firstname"></v-text-field>
      <v-text-field label="Last Name" name="Lastname" v-model="users.Lastname"></v-text-field>
      <v-text-field label="Email" name="Email" v-model="users.Email"></v-text-field>
      <v-text-field label="Password" name="Password" type="password" v-model="users.Password"></v-text-field>
      <v-btn class="light-green" text dark @click="SignUp">Sign Up</v-btn>
    </v-form>
  </panel>
</template>

<script>
import Panel from './Panel'
import axios from 'axios'

export default {
  components: {
      Panel
  },
  data () {
    return {
      users: {}
    }
  },
  methods: {
    SignUp () {
      axios.post('http://localhost:8081/users', this.users)
        .then(this.$router.push({
          name: 'Notes'
        }))
    }
  }
}
</script>