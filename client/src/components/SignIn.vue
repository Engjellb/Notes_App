<template>
  <panel title="Sign In">
    <v-form>
      <v-text-field label="Email"></v-text-field>
      <v-text-field label="Password"></v-text-field>
      <v-btn class="light-green" text dark>Sign In</v-btn>
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