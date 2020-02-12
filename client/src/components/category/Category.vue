<template>
  <panel title="Add category">
    <v-form @submit.prevent="Submit">
    <v-text-field label="Title" v-model="categories.title"></v-text-field>
    <v-btn class="light-green" text dark type="submit">
        Add
    </v-btn>    
    </v-form>
  </panel>
</template>

<script>
import Panel from '../Panel';
import axios from 'axios';

export default {
  components: {
      Panel
  },
  data () {
    return {
      categories: {}
    }
  },
  methods: {
    Submit () {
      /*eslint-disable*/
      axios.post('http://localhost:8081/categories/', this.categories)
        .then(this.$router.push({
          name: 'CategoryList'
        }));
    }
  }    
}
</script>