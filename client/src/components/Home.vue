<template>
  <div>
    <div class="light-green">
      <v-container>
        <v-row>
          <v-col md="5" cols="12">
            <v-row class="d-flex flex-column">
              <v-col>
                <h4 class="white--text display-1 font-weight-bold">About NotesApp</h4>
              </v-col>
              <v-col v-for="list in listNotesAboutUs" :key="list.description">
                <p class="white--text title">{{list.description}}</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col md="7" cols="12" class="d-flex justify-center align-center">
            <v-img src="../assets/notesContent.png" max-width="260"></v-img>
          </v-col>
        </v-row>   
      </v-container>
    </div>  
    <div class="grey lighten-4">
      <v-container>
        <v-row class="d-flex flex-column">
          <v-col>
            <v-row class="d-flex flex-column">
              <v-col class="d-flex justify-center">
                <v-img src="../assets/keepNotes.png" max-width="270"></v-img>
              </v-col>
              <v-col class="d-flex justify-center" xs="12">
                <h4 class="display-1 blue-grey--text text--darken-3">Remember every note</h4>
              </v-col>
            </v-row>
          </v-col>
          <v-col>
            <v-row class="d-flex justify-space-around mt-10 mb-10">
              <v-col md="3" sm="6" cols="12" v-for="list in listNotes" :key="list.description">
                <h4 class="font-weight-thin headline">{{list.description}}</h4>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div>
      <v-container>
        <v-row class="d-flex flex-column mt-10">
          <v-col class="d-flex justify-center">
            <v-img src="../assets/organizedNotes.png" max-width="145"></v-img>
          </v-col>
          <v-col class="d-flex justify-center mt-5">
            <h4 class="display-1 blue-grey--text text--darken-3">Organize your notes to access faster and easier</h4>
          </v-col>
          <v-row class="d-flex justify-center mt-3 ml-1"> 
            <v-col md="6">
              <p class="title">Notes App provides you to seperate notes from each other by organizing them in category</p>
            </v-col>
          </v-row>
        </v-row>
      </v-container>
    </div>
    <div class="blue-grey lighten-5">
      <v-container>
        <v-row class="d-flex justify-space-around mt-10">
          <v-col md="5" sm="6" cols="12">
            <v-img src="../assets/notesComputer.png" max-width="250"></v-img>
          </v-col>
          <v-col md="4" sm="6" cols="12">
            <v-row class="d-flex flex-column">
              <v-col>
                <h4 class="display-1 green--text text--light">Stay organized, wherever you are</h4>
              </v-col>
              <v-col>
                <p class="title">Plan, keep records, and manage projects from any device–even offline.</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div>
      <v-container>
        <v-row class="d-flex justify-center mt-10">
          <v-col md="7" sm="6" cols="12">
            <v-row class="d-flex flex-column">
              <v-col>
                <h4 class="display-1 green--text text--light">Collaborate with your team</h4>
              </v-col>
              <v-col md="6">
                <p class="title">Manage projects, deadlines, clients, and meetings with ease.</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col md="4" sm="6" cols="12">
            <v-img src="../assets/collaborate.png" max-width="290"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="grey lighten-4">
      <v-container>
        <v-row class="d-flex flex-column mt-10">
          <v-col class="d-flex justify-center">
            <h4 class="display-1">How It Works</h4>
          </v-col>
          <v-col>
            <v-row class="d-flex justify-space-around mt-4 mb-4">
              <v-col md="3" sm="6" cols="12" v-for="list in lists" :key="list.title">
                <v-row class="d-flex flex-column">
                  <v-col class="d-flex justify-center">
                    <v-avatar size="90" class="avatar">
                      <v-img :src="list.src"></v-img>
                    </v-avatar>
                  </v-col>
                  <v-col class="d-flex justify-center">
                    <h4 class="headline font-weight-bold">{{list.title}}</h4>
                  </v-col>
                  <v-col>
                    <p class="font-weight-thin title">{{list.descrption}}</p>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
    data () {
      return {
        lists: [
          {
            src: require('@/assets/signUp.png'), 
            title: 'Sign Up', 
            descrption: 'Create your free account and choose the plan that fits your needs.'
          },
          {
            src: require('@/assets/addNotes.png'), 
            title: 'Add Content', 
            descrption: 'Type notes, add attachments, clip web pages, or record memos. All in one place.'
          },
          {
            src: require('@/assets/searchNotes.png'), 
            title: 'Find Everything', 
            descrption: 'Organize your notes, your way. Use notebooks, tags, or our powerful search to find everything you need quickly.'
          },
          {
            src: require('@/assets/thingsDoneNotes.png'), 
            title: 'Get Things Done', 
            descrption: 'Manage projects, take meeting notes, set reminders, and edit documents.'
          }
        ],

        listNotes: [
            {description: 'Manage everything from big projects to personal moments.'},
            {description: 'Capture ideas and inspiration in notes, voice, and pictures.'},
            {description: 'Never lose track of your tasks and deadlines.'}
        ],
        
        listNotesAboutUs: [
          {description: 'NotesApp was founded to address a growing problem that technology helped to create: how to succeed in a world of an ever-increasing volume and velocity of information.'},
          {description: 'Our purpose is to give people the time and freedom to focus on what matters by helping them to live more organized lives.'}
        ]
      }
    }
}
</script>
<style scoped>
.avatar {
  border: 2px solid #BDBD;
}
</style>