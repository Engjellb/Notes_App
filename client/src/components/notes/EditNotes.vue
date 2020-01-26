<template>
  <panel title="Edit Note">
    <v-form>
      <v-text-field label="Title" v-model="editNote.Title"></v-text-field>
      <v-text-field label="Description" v-model="editNote.Description"></v-text-field>
      <v-btn class="light-green" text dark @click="Edit">Add</v-btn>
    </v-form>
  </panel>
</template>

<script>
import axios from 'axios'
import Panel from '../Panel'

export default {
  components: {
      Panel
  },  
  data () {
    return {
      editNote: {}
    }
  },
  mounted () {
    axios.get('http://localhost:8081/notes/'+ this.$route.params.id)
      .then((response) => {
          this.editNote = response.data
      })
  },
  methods: {
      Edit () {
        axios.put('http://localhost:8081/notes/' + this.$route.params.id, this.editNote)
          .then(this.$router.push({
              name: 'Notes'
          }))
      }
  }
}
</script>