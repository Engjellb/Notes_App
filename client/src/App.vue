<template>
  <v-app>
    <navbar></navbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <footer-app></footer-app>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import FooterApp from '@/components/Footer.vue'

export default {
  name: 'App',

  components: {
    Navbar,
    FooterApp
  },

  data () {
    return {
      drawer: false
    }
  }
};
</script>
