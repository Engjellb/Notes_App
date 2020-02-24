<template>
  <v-container>
    <h4 class="headline mt-3">Contacts</h4>
    <v-simple-table class="mt-6">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left fontSize">First name</th>
            <th class="text-left fontSize">Last name</th>
            <th class="text-left fontSize">Phone number</th>
            <th class="text-left fontSize">Email</th>
            <th class="text-left fontSize">Message</th>
            <th class="text-left fontSize">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="contact in contacts" :key="contact._id">
            <td class="text-left">{{contact.firstName}}</td>
            <td class="text-left">{{contact.lastName}}</td>
            <td class="text-left">{{contact.phoneNumber}}</td>
            <td class="text-left">{{contact.email}}</td>
            <td class="text-left">{{contact.message | sliceWord}}</td>
            <td class="text-left">
              <v-btn icon text><v-icon>more_vert</v-icon></v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
import axios from 'axios';
/*eslint-disable*/
export default {
  data () {
    return {
      contacts: []
    }
  },
  mounted () {
    axios.get('http://localhost:8081/contacts/')
      .then((response) => {
        if (this.$store.state.token == null) {
          this.$router.push({
            name: 'SignIn'
          });
        }
        this.contacts = response.data;
      });
  },
  filters: {
    sliceWord (value) {
      return value.slice(0, 10) + '...';
    }
  }  
}
</script>

<style scoped>
.fontSize {
  font-size: 15px;
}
</style>