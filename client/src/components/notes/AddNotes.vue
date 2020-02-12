<template>
  <panel title="Add Notes">
    <v-form>
      <v-text-field label="Title" name="Title" v-model="notes.Title"></v-text-field>
      <v-text-field label="Description" name="Description" v-model="notes.Description"></v-text-field>
      <v-select label="Add category" 
      :items="categories" @change="getId" item-text="title" return-object></v-select>
      <v-btn class="light-green" text dark @click="Submit">Add</v-btn>
    </v-form>
  </panel>
</template>

<script>
import Panel from '../Panel'
import axios from 'axios'
/*eslint-disable*/
export default {
    components: {
        Panel
    },
    data () {
      return {
        notes: {},
        categories: [],
        id: null
      }
    },    
    methods: {
      Submit () {
        if (this.id == null) {
          axios.post('http://localhost:8081/notes', this.notes)
            .then(this.$router.push({
              name: 'Notes'
            }));
        } else {  
          axios.post('http://localhost:8081/notes/'+this.id, this.notes)
        }
      },
      getId (e) {
        this.id = e._id;
      }
    },
    mounted () {
      axios.get('http://localhost:8081/categories/')
        .then((response) => {
          this.categories = response.data;
          console.log(response.data)
        });
    }
}
</script>