<template>
  <panel title="Sign Up">
    <v-form>
      <v-text-field label="First Name"></v-text-field>
      <v-text-field label="Last Name"></v-text-field>
      <v-text-field label="Email"></v-text-field>
      <v-text-field label="Password" type="password"></v-text-field>
      <v-text-field label="Confirm Password" type="password"></v-text-field>
      <v-btn class="light-green" text dark>Sign Up</v-btn>
    </v-form>
  </panel>
</template>

<script>
import Panel from './Panel'

export default {
  components: {
      Panel
  }    
}
</script>