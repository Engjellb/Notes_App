<template>
  <panel title="Add Notes">
    <v-form>
      <v-text-field label="Title" v-model="notes.Title"></v-text-field>
      <v-text-field label="Description" v-model="notes.Description"></v-text-field>
      <v-btn class="light-green" text dark @click="Submit">Add</v-btn>
    </v-form>
  </panel>
</template>

<script>
import Panel from '../Panel'
import axios from 'axios'

export default {
    components: {
        Panel
    },
    data () {
      return {
        notes: {}
      }
    },    
    methods: {
      Submit () {
        axios.post('http://localhost:8081/notes', this.notes)
          .then(this.$router.push({
            name: 'Notes'
          })).then((response) => {
            //eslint-disable-next-line
            console.log(response)
          })
      }
    }
}
</script>