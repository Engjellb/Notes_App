<template>
  <v-container>
    <v-row class="d-flex flex-wrap">
      <v-col md="3" sm="4" cols="12" v-for="notes in showNotes" :key="notes._id">
        <v-card>
          <v-list-item>
            <v-list-item-content>
              <div class="overline mb-4">One minute ago</div>
              <v-list-item-title class="headline mb-1">{{notes.Title}}</v-list-item-title>
              <v-list-item-subtitle class="mt-4">{{notes.Description}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-action>
            <v-btn icon>
              <v-icon>favorite</v-icon>    
            </v-btn>
            <v-btn icon :to="{name: 'EditNote', params: { id: notes._id }}">
              <v-icon>create</v-icon>    
            </v-btn>
            <v-row justify="center" style="display:inline-block"> 
              <v-dialog v-model="dialog" max-width="290">
                <template v-slot:activator="{ on }">
                  <v-btn icon v-on="on">
                    <v-icon>delete</v-icon>    
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title class="headline">Do you want to delete this?</v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="dialog = false">No</v-btn>
                    <v-btn color="green darken-1" text @click="deleteNote(notes._id)">Yes</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
          </v-card-action>
        </v-card>    
      </v-col>
    </v-row>
    <v-row style="position:relative;top:180px;">
      <v-col align="center" v-if="showNoteMessage">
        <h4 class="display-1 font-weight-medium blue-grey--text text--lighten-4">Your notes appear here</h4>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      showNotes: {},
      dialog: false,
      showNoteMessage: false
    }
  },
  mounted () {
      axios.get('http://localhost:8081/notes')
        .then((response) => {
            if (Object.keys(response.data).length === 0){
              this.showNoteMessage = true
            }
            this.showNotes = response.data
      })
  },
  methods: {
    deleteNote (noteId) {
        axios.delete('http://localhost:8081/notes/'+ noteId)
          .then(this.dialog = false)
          .then(this.$router.push({
            name: 'Home'
          }))
          .catch(e => {
            this.errors.push(e)
          })
    }
  }
}
</script>