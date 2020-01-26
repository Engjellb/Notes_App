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
            <v-btn icon>
              <v-icon>delete</v-icon>    
            </v-btn>
          </v-card-action>
    </v-card>    
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      showNotes: {}
    }
  },
  mounted () {
      axios.get('http://localhost:8081/notes')
        .then((response) => {
            //eslint-disable-next-line
            this.showNotes = response.data
        })
  }   
}
</script>