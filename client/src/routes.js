import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import SignIn from './components/SignIn.vue'
import AddNotes from './components/notes/AddNotes.vue'
import ShowNotes from './components/notes/ShowNotes.vue'
import EditNotes from './components/notes/EditNotes.vue'

const routes = [
    {path: '/SignUp', component: SignUp},
    {path: '/', name: 'Home', component: Home},
    {path: '/SignIn', component: SignIn},
    {path: '/AddNotes',name: 'AddNotes', component: AddNotes},
    {path: '/Notes',name: 'Notes', component: ShowNotes},
    {path: '/EditNote/:id', name: 'EditNote', component: EditNotes}
]

export default routes
