<template>
  <v-container>
    <h4 class="font-weight-light headline mb-6">Category: {{categoryTitle}}</h4>
    <v-row class="d-flex flex-wrap">
      <v-col md="3" sm="4" cols="12" v-for="noteList in notesListOfCategory" :key="noteList._id">
        <v-card>
          <v-list-item>
            <v-list-item-content>
              <div class="overline mb-4">{{noteList.createdAt | formatDate }}</div>
              <v-list-item-title class="headline mb-1">{{noteList.Title}}</v-list-item-title>
              <v-list-item-subtitle class="mt-4">{{noteList.Description}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
/*eslint-disable*/
export default {

  data () {
    return {
      notesListOfCategory: [],
      categoryTitle: ''
    }
  },
  mounted () {
    axios.get('http://localhost:8081/notes/populate/'+ this.$route.params.id)
      .then((response) => {
        this.notesListOfCategory = response.data.notes;
        this.categoryTitle = response.data.title;
      });
  },
  filters: {
    formatDate (value) {
      if (!value) return null;
      return moment(value).format('MMM Do YY');
    }
  }
}
</script>