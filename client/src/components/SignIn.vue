<template>
  <panel title="Sign In">
    <v-form @submit="Send">
      <v-text-field label="Email" v-model="email"></v-text-field>
      <v-text-field label="Password" type="password" v-model="password"></v-text-field>
      <div class="text-center red--text">{{error}}</div>
      <v-btn class="light-green" text dark type="submit">Sign In</v-btn>
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
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async Send (e) {

      e.preventDefault()
      try {
        const response = await axios.post('http://localhost:8081/users/signin', {
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'Notes'
        })
      } catch (err) {
        this.error = err.response.data.message
      }
    }
  }
}
</script>