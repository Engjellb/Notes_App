<template>
  <div>
    <nav>
      <v-app-bar class="blue-grey darken-2" app dark flat>

        <v-app-bar-nav-icon :class="{'d-flex d-sm-none': isActive}"
         @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-img v-if="!$store.state.isUserLoggedIn"
        src="../assets/Notes.png" max-width="45" class="d-none d-sm-flex"></v-img>
        <v-toolbar-title style="width:140px" 
        class="text-capitalize font-weight-bold pl-0 font-italic headline ml-2 d-sm-none d-none d-md-flex">
        <span>NotesApp</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items>
        <v-btn v-if="!$store.state.isUserLoggedIn" to="/SignUp" text class="d-none d-sm-flex">
          Sign Up
        </v-btn>
        </v-toolbar-items>

       <v-toolbar-items>
        <v-btn v-if="!$store.state.isUserLoggedIn" to="/SignIn" text class="d-none d-sm-flex">
          Sign In
        </v-btn>
        </v-toolbar-items>

        <v-toolbar-items>
        <v-btn v-if="$store.state.isUserLoggedIn" @click="signout" text class="d-none d-sm-flex">
          Sign Out
        </v-btn>
        </v-toolbar-items>
      </v-app-bar>
    </nav>
    <v-navigation-drawer dark v-model="drawer" disable-resize-watcher
    class="blue-grey darken-2" app>
      <v-list class="blue-grey darken-2 ml-3">
        <v-row class="mt-4">
          <v-col xs="4" class="flex-grow-0 pr-0">
            <v-img src="../assets/Notes.png" max-width="45"></v-img>
          </v-col>
          <v-col xs="8" class="align-self-center pl-0">
            <span class="font-weight-bold font-italic headline ml-1">NotesApp</span>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-list-item v-if="!$store.state.token" class="mt-2">
          <v-list-item-icon>
            <v-icon>assignment_ind</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Sign In</v-list-item-content>
        </v-list-item>

        <v-list-item v-if="!$store.state.isUserLoggedIn">
          <v-list-item-icon>
            <v-icon>account_circle</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Sign Up</v-list-item-content>
        </v-list-item>
        <v-list-item v-if="$store.state.isUserLoggedIn">
            <router-link 
            to="/AddNotes" tag="v-list-item" style="cursor:pointer;">
              <v-list-item-icon style="float:left;">
                  <v-icon>add_box</v-icon>
              </v-list-item-icon>
                <v-list-item-content 
                style="padding-top:16px;">Add Note</v-list-item-content>
            </router-link>
        </v-list-item>
        <v-list-item v-if="$store.state.isUserLoggedIn">
            <router-link
            to="/Notes" tag="v-list-item" style="cursor:pointer;">
              <v-list-item-icon style="float:left;">
                  <v-icon>archive</v-icon>
              </v-list-item-icon>
                <v-list-item-content style="padding-top:16px;">Notes</v-list-item-content>
            </router-link>
        </v-list-item>
        <v-spacer></v-spacer>
        <v-list-item v-if="$store.state.isUserLoggedIn">
            <router-link
            to="/Notes" tag="v-list-item" style="cursor:pointer;">
              <v-list-item-icon style="float:left;">
                  <v-icon>assignment_return</v-icon>
              </v-list-item-icon>
                <v-list-item-content style="padding-top:16px;">Sign Out</v-list-item-content>
            </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    data () {
        return {
            drawer: false
        }
    },
    methods: {
      signout () {
        this.$store.dispatch('setToken', null);
        this.$store.dispatch('setUser', null);
        this.$router.push({
          name: 'Home'
        })
      }
    },
    computed: {
      isActive () {
        if (this.$store.state.isUserLoggedIn)
          return false;

        return true;
      }
    }
}
</script>
<style scoped>

</style>