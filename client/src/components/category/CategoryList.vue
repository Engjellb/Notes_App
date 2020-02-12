<template>
  <v-container>
    <v-row class="d-flex flex-wrap">
      <v-col md="3" sm="4" cols="12" v-for="category in categories"
       :key="category._id">
        <v-card hover :to="{name: 'NotesListOfCategory', params: {id: category._id}}">
          <v-list-item>
            <v-list-content>
              <div class="overline mb-4">{{category.createdAt | formatDate}}</div>
              <v-list-item-title class="headline mb-1">{{category.title}}</v-list-item-title>
            </v-list-content>
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
      categories: []
    }
  },
  mounted () {
    axios.get('http://localhost:8081/categories')
      .then((response) => {
        this.categories = response.data;
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